import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-listar-atendimentos-atividades',
  templateUrl: './listar-atendimentos-atividades.component.html',
  styleUrls: ['./listar-atendimentos-atividades.component.css']
})
export class ListarAtendimentosAtividadesComponent extends BaseComponent implements OnInit {

  cidade: string = null;
  tipo: string = null;
  atividade: string = null;
  instituicao: string = null;

  atividades: any[] = [];
  cidadesFiltro = [];

  tooltipEvento = "Cursos, workshops, seminários, aulas, palestras na área da saúde mental voltados para público em geral seja presencial ou virtual";
  tooltipTelefonico = "Serviço de acolhimento emocional por telefone.";
  tooltipVirtual = "Apoio e atividades afins que acontecem virtualmente através de plataformas de videoconferência, chat, redes sociais, mensagens via aplicativo etc.";
  tooltipPresencial = "Reuniões de apoio, atendimento terapêutico e atividades similares que acontecem de forma presencial em grupo ou individualmente.";

  tempAtividades = [];

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit(): void {
    this.obterAtendimentos();
  }

  async obterAtendimentos() {
    this.loading = true;

    const atdTelefonico = await axios.get('http://localhost:3000/atendimentos/telefonico');
    atdTelefonico.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome as string,
        telefone: element.telefone,
        observacao: element.observacao,
        abrangencia: element.abrangencia,
        instituicao: element.instituicao.nome,
        ativo: element.ativo,
        type: 'telefonico'
      }
      this.tempAtividades.push(atd);
    });

    const atdPresencial = await axios.get('http://localhost:3000/atendimentos/presencial');
    atdPresencial.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome as string,
        cidade: element.endereco.cidade,
        telefone: element.telefone,
        observacao: element.observacao,
        instituicao: element.instituicao.nome,
        ativo: element.ativo,
        type: 'presencial'
      }
      this.tempAtividades.push(atd);
    });

    const atdVirtuais = await axios.get('http://localhost:3000/atendimentos/virtual');
    atdVirtuais.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome as string,
        telefone: element.telefone,
        observacao: element.observacao,
        endVirtual: element.enderecoVirtual,
        instituicao: element.instituicao.nome,
        ativo: element.ativo,
        type: 'virtual'
      }
      this.tempAtividades.push(atd);
    });

    const atdEventos = await axios.get('http://localhost:3000/eventos');
    atdEventos.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome as string,
        cidade: element.endereco.cidade,
        telefone: element.telefone,
        observacao: element.observacao,
        // instituicao: element.instituicao.nome,
        ativo: element.ativo,
        type: 'evento'
      }
      this.tempAtividades.push(atd);
    });

    this.filtrarOpcoesCidades();
    this.atividades = this.orderByName(this.tempAtividades);
    this.loading = false;
  }

  filtrarOpcoesCidades(): void {
    const unique = [...new Set(this.tempAtividades.map(item => item.cidade))];
    this.cidadesFiltro = unique.map(x => {
      return x ? x.toString() : '';
    });
  }

  filtrar(): void {
    let atividadesFiltradas = Object.assign(this.tempAtividades);

    if (this.cidade && this.cidade != 'null')
      atividadesFiltradas = this.filtrarCidade(atividadesFiltradas);

    if (this.tipo && this.tipo != 'null')
      atividadesFiltradas = this.filtrarTipo(atividadesFiltradas);

    if (this.atividade && this.atividade.trim() != '')
      atividadesFiltradas = this.filtrarAtividade(atividadesFiltradas);

    if (this.instituicao && this.instituicao.trim() != '') {
      atividadesFiltradas = this.filtrarInstituicao(atividadesFiltradas);
    }

    this.atividades = this.orderByName(atividadesFiltradas);
    this.loading = false;
  }

  filtrarCidade(atividades): any[] {
    this.loading = true;
    if (this.cidade == 'nacional') {

    } else {
      return atividades.filter(x => x.cidade && x.cidade == this.cidade);
    }
  }

  filtrarTipo(atividades): any[] {
    return atividades.filter(x => x.type && x.type == this.tipo);
  }

  filtrarAtividade(atividades): any[] {
    return atividades.filter(x => x.nome && x.nome.indexOf(this.atividade) > -1);
  }

  filtrarInstituicao(atividades): any[] {
    return atividades.filter(x => x.instituicao && x.instituicao == this.instituicao);
  }

  novoEvento() {
    this.router.navigate(['cadastrar-evento']);
  }

  novoTelefonico() {
    this.router.navigate(['cadastrar-telefonico']);
  }

  novoVirtual() {
    this.router.navigate(['cadastrar-virtual']);
  }

  novoPresencial() {
    this.router.navigate(['cadastrar-presencial']);
  }

  irParaManterAtendimentos(item) {
    this.router.navigate(['./editar-' + item.type, item.id]);
  }

  atualizarStatus(id) {
    console.log(id)
  }
}
