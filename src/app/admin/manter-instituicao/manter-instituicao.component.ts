import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as cep from 'cep-promise';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-manter-instituicao',
  templateUrl: './manter-instituicao.component.html',
  styleUrls: ['./manter-instituicao.component.css']
})
export class ManterInstituicaoComponent extends BaseComponent implements OnInit {

  cepInformado: string;

  logradouro: string;
  bairro: string;
  cidade: string;

  dataFundacao: any;
  tipoEmpresa: any;

  constructor(private modalService: NgbModal) {
    super();
  }

  ngOnInit(): void {
    this.afuConfig.multiple = true;
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
