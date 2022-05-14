import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import cep from 'cep-promise';
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

  constructor(private activatedRoute: ActivatedRoute,
    public router: Router) {
    super(router);

    this.activatedRoute.data.subscribe(data => {
      this.titulo = data.title;
    });
  }

  ngOnInit(): void {
    this.buscarAtividade();
  }

  async buscarAtividade() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
      this.atendimento = (await axios.get('http://localhost:3000/atendimentos/presencial/' + id)).data;
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
