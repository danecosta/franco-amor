import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { AtendimentoPresencialDTO } from 'src/app/_models/atendimento-presencial.dto';
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

  atendimento: any;

  atendimentoPresencialDTO = new AtendimentoPresencialDTO();

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
    this.loading = true;
    this.limparCamposCep();

    if (this.atendimentoPresencialDTO.endereco.cep) {
      var cepPromise = require("cep-promise");
      cepPromise(this.atendimentoPresencialDTO.endereco.cep).then(
        data => {
          this.atendimentoPresencialDTO.endereco.logradouro = data.street;
          this.atendimentoPresencialDTO.endereco.bairro = data.neighborhood;
          this.atendimentoPresencialDTO.endereco.cidade = data.city;
          this.loading = false;
        });
    }
  }

  limparCamposCep() {
    this.atendimentoPresencialDTO.endereco.logradouro = '';
    this.atendimentoPresencialDTO.endereco.bairro = '';
    this.atendimentoPresencialDTO.endereco.cidade = '';
  }
}
