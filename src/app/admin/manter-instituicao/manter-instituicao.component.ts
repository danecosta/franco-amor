import { CriarRepresentanteDTO } from './../shared/dto/criar-representante.dto';
import { CriarInstituicaoDTO } from './../shared/dto/criar-instituicao.dto';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as cep from 'cep-promise';
import { BaseComponent } from '../base.component';
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manter-instituicao',
  templateUrl: './manter-instituicao.component.html',
  styleUrls: ['./manter-instituicao.component.css']
})
export class ManterInstituicaoComponent extends BaseComponent implements OnInit {

  acao: string = 'Cadastrar';

  cepInformado: string;

  logradouro: string;
  bairro: string;
  cidade: string;

  dataFundacao: any;
  tipoEmpresa: any;

  criarInstituicao = new CriarInstituicaoDTO();
  criarRepresentanteUm = new CriarRepresentanteDTO();
  criarRepresentanteDois = new CriarRepresentanteDTO();

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
      this.criarInstituicao = await (await axios.get('https://franco-amor-api.herokuapp.com/instituicoes/' + id)).data;
      this.acao = 'Editar';
    }
  }

  public async salvar() {
    //Preenche representantes
    if (this.criarRepresentanteUm && this.criarRepresentanteDois)
      this.criarInstituicao.representantes.push(this.criarRepresentanteUm, this.criarRepresentanteDois);

    // Persiste
    if (this.acao == 'Cadastrar') {
      await axios.post('https://franco-amor-api.herokuapp.com/instituicoes', this.criarInstituicao);
    } else {
      await axios.put('https://franco-amor-api.herokuapp.com/instituicoes', this.criarInstituicao);
    }

    this.voltarParaTab('atendimentos')
  }

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
