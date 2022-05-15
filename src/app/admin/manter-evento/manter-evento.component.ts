import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import { HoraAtendimentoDTO } from 'src/app/_models/horario-atendimento.dto';
import { EventoDTO } from 'src/app/_models/evento.dto';
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

  instituicoesSelect = [];
  enderecosSelect = [];

  public eventoDTO = new EventoDTO();

  horaAtendimento: HoraAtendimentoDTO = new HoraAtendimentoDTO();

  constructor(private modalService: NgbModal,
    public router: Router,
    private activatedRoute: ActivatedRoute) {
    super(router);

    this.activatedRoute.data.subscribe(data => {
      this.titulo = data.title;
    });
  }

  ngOnInit(): void {
    this.afuConfig.multiple = true;
    this.obterInstituicoes();
    this.buscarEvento();
  }

  async buscarEvento() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
      this.eventoDTO = (await axios.get('http://localhost:3000/eventos/' + id)).data;
  }

  public instituicaoHandler($event) {
    this.enderecosSelect = [];
    this.enderecosSelect.push($event.endereco);
    this.eventoDTO.instituicao.id = $event.id;
  }

  public enderecoHandler($event) {
    this.eventoDTO.endereco.id = $event.id;
  }

  private async obterInstituicoes() {
    const instituicoes = await (await axios.get('http://localhost:3000/instituicoes')).data;
    if (instituicoes) {
      instituicoes.forEach(element => {
        let select = {
          id: element.id,
          nome: element.nome,
          endereco: element.endereco
        }
        this.instituicoesSelect.push(select);
      });
    }
  }


  public async salvar() {
    this.loading = true;
    this.eventoDTO.horaAtendimento.push(this.horaAtendimento);
    await axios.post('http://localhost:3000/eventos', this.eventoDTO);
    this.loading = false;
    this.voltarParaTab('atendimentos');
  }

  buscarCep() {
    this.loading = true;
    this.limparCamposCep();

    if (this.eventoDTO.endereco.cep) {
      var cepPromise = require("cep-promise");
      cepPromise(this.eventoDTO.endereco.cep).then(
        data => {
          this.eventoDTO.endereco.logradouro = data.street;
          this.eventoDTO.endereco.bairro = data.neighborhood;
          this.eventoDTO.endereco.cidade = data.city;
          this.loading = false;
        });
    }
  }

  limparCamposCep() {
    this.eventoDTO.endereco.logradouro = '';
    this.eventoDTO.endereco.bairro = '';
    this.eventoDTO.endereco.cidade = '';
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
