import { Component, OnInit } from '@angular/core';
import * as cep from 'cep-promise';

@Component({
  selector: 'app-manter-instituicao',
  templateUrl: './manter-instituicao.component.html',
  styleUrls: ['./manter-instituicao.component.css']
})
export class ManterInstituicaoComponent implements OnInit {

  cpfInformado: string;

  logradouro: string;
  bairro: string;
  cidade: string;

  dataFundacao: any;

  constructor() { }

  ngOnInit(): void {
  }

  voltar() {
    history.back();
  }

  salvar() { }

  buscarCep() {

    this.limparCamposCep();

    cep(this.cpfInformado).then(
      data => {
        this.logradouro = data.street;
        this.bairro = data.neighborhood;
        this.cidade = data.city;
      });
  }

  limparCamposCep() {
    this.logradouro = '';
    this.bairro = '';
    this.cidade = '';
  }

}
