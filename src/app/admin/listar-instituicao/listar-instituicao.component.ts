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
    this.loading = true;
    const inst = await axios.get('http://localhost:3000/instituicoes');

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

    this.instituticoes = this.orderByName(this.instituticoes);
    this.loading = false;
  }

  filtrar() {

  }
}
