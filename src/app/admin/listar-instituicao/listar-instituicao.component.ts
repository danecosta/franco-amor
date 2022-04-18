import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import axios from 'axios';


export class Filtro {
  nome: string;
  cnpj: string;
  cidade: string;
}
@Component({
  selector: 'app-listar-instituicao',
  templateUrl: './listar-instituicao.component.html',
  styleUrls: ['./listar-instituicao.component.css']
})
export class ListarInstituicaoComponent extends BaseComponent implements OnInit {

  public instituticoes: any[] = [];
  public filtro = new Filtro();

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit() {
    this.obterInstituicoes();
  }

  novaInstituicao() {
    this.router.navigate(['manter-instituicao']);
  }

  irParaManterInst(item) {
    this.router.navigate(['manter-instituicao', item.id]);
  }

  async obterInstituicoes() {
    const inst = await axios.get('https://franco-amor-api.herokuapp.com/instituicoes');

    inst.data.forEach(element => {
      let inst = {
        id: element.id,
        nome: element.nome,
        email: element.email,
        cidade: element.endereco.cidade,
        cnpj: element.cnpj,
        telefone: element.telefone
      }
      this.instituticoes.push(inst);
    });

    //TODO: Ordenar instituicoes por nome
    //TODO: Incluir paginacao
  }

  filtrar() {
    if (this.filtro.nome) {
      this.instituticoes = this.instituticoes.filter(x => x.nome.toUpperCase().indexOf(this.filtro.nome.toUpperCase()) > -1);
    }
  }
}
