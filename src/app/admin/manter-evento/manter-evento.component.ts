import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import { HoraAtendimentoDTO } from 'src/app/_models/horario-atendimento.dto';
import { EventoDTO } from 'src/app/_models/evento.dto';
import cep from 'cep-promise';
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

  public eventoDTO = new EventoDTO();

  horaAtendimento: HoraAtendimentoDTO = new HoraAtendimentoDTO();

  constructor(private modalService: NgbModal,
    public router: Router,
    private route: ActivatedRoute) {
    super(router);
  }

  ngOnInit(): void {
    this.afuConfig.multiple = true;
    this.obterInstituicoes();
    this.buscarEvento();
  }

  async buscarEvento() {
    let id = this.route.snapshot.paramMap.get('id');
    this.eventoDTO = await (await axios.get('http://localhost:3000/eventos/' + id)).data;
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


  async salvar() {
    this.eventoDTO.horaAtendimento.push(this.horaAtendimento);
    const retorno = await axios.post('http://localhost:3000/eventos', this.eventoDTO);
    this.router.navigate(['procuro-ajuda'])
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
