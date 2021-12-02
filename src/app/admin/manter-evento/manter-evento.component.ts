import { CriarHoraAtendimentoDTO } from './../shared/dto/criar-horario-atendimento.dto';
import { CriarEventoDTO } from './../shared/dto/criar-evento.dto';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import * as cep from 'cep-promise';
import axios from 'axios';

@Component({
  selector: 'app-manter-evento',
  templateUrl: './manter-evento.component.html',
  styleUrls: ['./manter-evento.component.css']
})
export class ManterEventoComponent extends BaseComponent implements OnInit {

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
  endereco: string = null;

  cepInformado: string;
  logradouro: string;
  bairro: string;
  cidade: string;

  instituicoesSelect = [];
  enderecosSelect = []; 

  public eventoDTO = new CriarEventoDTO();

  horaAtendimento: CriarHoraAtendimentoDTO = new CriarHoraAtendimentoDTO();

  constructor(private modalService: NgbModal) {
    super();
  }

  ngOnInit(): void {
    this.afuConfig.multiple = true;
    this.obterInstituicoes();
  }

  public instituicaoHandler($event) {
      console.log($event);
      this.enderecosSelect = [];
      this.enderecosSelect.push($event.endereco);
      this.eventoDTO.instituicaoId = $event.id;
  }

  public enderecoHandler($event) {
    console.log('endereco')
    console.log($event);
    this.eventoDTO.enderecoId = $event.id;
  }

  private async obterInstituicoes() {
    const instituicoes = await (await axios.get('https://franco-amor-api.herokuapp.com/instituicoes')).data;
    if(instituicoes) {
      instituicoes.forEach(element => {
          let select = {
            id: element.id,
            nome: element.nome,
            endereco : element.endereco
          } 
          this.instituicoesSelect.push(select);
      });
    }
  }


  async salvar() {
    console.log(this.eventoDTO);
    this.eventoDTO.horariosAtendimento.push(this.horaAtendimento);
    const retorno = await axios.post('http://localhost:3000/eventos', this.eventoDTO);
    console.log(retorno.data)
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
}
