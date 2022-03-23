import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import * as cep from 'cep-promise';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-manter-presencial',
  templateUrl: './manter-presencial.component.html',
  styleUrls: ['./manter-presencial.component.css']
})
export class ManterPresencialComponent extends BaseComponent implements OnInit {

  dataAtividade: string;
  dataAtividadeInicio: string;
  dataAtividadeFim: string;
  periodicidade: string = null;
  prazoIndefinido = false;
  dataPrazo: string;
  repete = false;
  domingo = true;
  segunda = true;
  terca = true;
  quarta = true;
  quinta = true;
  sexta = true;
  sabado = true;

  valor: string;
  participacao: string;
  tipoEncontro: string;
  endereco: string = null;

  cepInformado: string;
  logradouro: string;
  bairro: string;
  cidade: string;

  atendimento: any;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.buscarAtividade();
  }

  async buscarAtividade() {
    let id = this.route.snapshot.paramMap.get('id');
    this.atendimento = await (await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/presencial/' + id)).data;
    console.log(this.atendimento);
  }

  voltar() {
    history.back();
  }

  salvar() { }

  buscarCep() {

    this.limparCamposCep();

    cep(this.cepInformado).then(
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
