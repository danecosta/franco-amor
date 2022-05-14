import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import axios from 'axios';


export class FiltroInstituicao {
  nome: string = null;
  cnpj: string = null;;
  cidade: string = null;
}

@Component({
  selector: 'app-listar-instituicao',
  templateUrl: './listar-instituicao.component.html',
  styleUrls: ['./listar-instituicao.component.css']
})
export class ListarInstituicaoComponent extends BaseComponent implements OnInit {

  cidadesFiltro = [];

  tempInstituticoes = [];
  public instituticoes: any[] = [];
  public filtro = new FiltroInstituicao();

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit() {
    this.obterInstituicoes();
  }

  novaInstituicao() {
    this.router.navigate(['cadastrar-instituicao']);
  }

  irParaManterInst(item) {
    this.router.navigate(['editar-instituicao', item.id]);
  }

  async obterInstituicoes() {
    this.loading = true;
    const inst = await axios.get('http://localhost:3000/instituicoes');

    inst.data.forEach(element => {
      let inst = {
        id: element.id,
        nome: element.nome,
        email: element.email,
        cidade: element.endereco.cidade,
        cnpj: element.cnpj,
        telefone: element.telefone,
        ativo: element.ativo
      }
      this.tempInstituticoes.push(inst);
    });

    this.instituticoes = this.orderByName(this.tempInstituticoes);
    this.filtrarOpcoesCidades();
    this.loading = false;
  }


  filtrarOpcoesCidades(): void {
    const unique = [...new Set(this.instituticoes.map(item => item.cidade))];
    this.cidadesFiltro = unique.map(x => {
      return x ? x.toString() : '';
    });
  }

  filtrar(): void {
    let instituicoesFiltradas = Object.assign(this.tempInstituticoes);

    if (this.filtro.cidade && this.filtro.cidade != 'null')
      instituicoesFiltradas = this.filtrarCidade(instituicoesFiltradas);

    if (this.filtro.nome && this.filtro.nome.trim() != '')
      instituicoesFiltradas = this.filtrarInstituicao(instituicoesFiltradas);

    if (this.filtro.cnpj && this.filtro.cnpj.trim() != '')
      instituicoesFiltradas = this.filtrarCNPJ(instituicoesFiltradas);

    this.instituticoes = this.orderByName(instituicoesFiltradas);
    this.loading = false;
  }

  filtrarCidade(atividades): any[] {
    this.loading = true;
    if (this.filtro.cidade == 'nacional') {

    } else {
      return atividades.filter(x => x.cidade && x.cidade == this.filtro.cidade);
    }
  }

  filtrarInstituicao(instituicoes): any[] {
    return instituicoes.filter(x => x.nome && x.nome.indexOf(this.filtro.nome) > -1);
  }

  filtrarCNPJ(instituicoes): any[] {
    return instituicoes.filter(x => x.cnpj && x.cnpj.indexOf(this.filtro.cnpj) > -1);
  }
}
