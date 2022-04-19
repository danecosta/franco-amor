import { InstituicaoDTO } from './../shared/dto/criar-instituicao.dto';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';

declare var require: any

@Component({
  selector: 'app-manter-instituicao',
  templateUrl: './manter-instituicao.component.html',
  styleUrls: ['./manter-instituicao.component.css']
})

export class ManterInstituicaoComponent extends BaseComponent implements OnInit {

  acao: string = 'Cadastrar';

  instituicao = new InstituicaoDTO();

  constructor(private modalService: NgbModal,
    private route: ActivatedRoute,
    public router: Router) {
    super(router);
  }

  ngOnInit(): void {
    this.afuConfig.multiple = true;
    this.buscarInstituicao();
  }

  async buscarInstituicao() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const getInstituicao = await axios.get('http://localhost:3000/instituicoes/' + id);
      if (getInstituicao) {
        this.instituicao = getInstituicao.data;
        this.acao = 'Editar';
      }
    }
  }

  public async salvar() {
    this.loading = true;
    if (this.acao == 'Cadastrar') {
      await axios.post('http://localhost:3000/instituicoes', this.instituicao);
    } else {
      await axios.put('http://localhost:3000/instituicoes', this.instituicao);
    }
    this.loading = false;
    this.voltarParaTab('atendimentos');
  }

  buscarCep() {
    this.loading = true;
    this.limparCamposCep();

    if (this.instituicao.endereco.cep) {
      var cepPromise = require("cep-promise");
      cepPromise(this.instituicao.endereco.cep).then(
        data => {
          this.instituicao.endereco.logradouro = data.street;
          this.instituicao.endereco.bairro = data.neighborhood;
          this.instituicao.endereco.cidade = data.city;
          this.loading = false;
        });
    }
  }

  limparCamposCep() {
    this.instituicao.endereco.logradouro = '';
    this.instituicao.endereco.bairro = '';
    this.instituicao.endereco.cidade = '';
  }

  openModal(content) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = 'Fechado: $result';
      }, (reason) => {
        this.closeResult = 'Fechado';
      });
  }

  openModalLogo(content) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = 'Fechado: $result';
      }, (reason) => {
        this.closeResult = 'Fechado';
      });
  }
}
