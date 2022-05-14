import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/admin/base.component';
import axios from "axios";

@Component({
  selector: 'app-lista-atividades',
  templateUrl: './lista-atividades.component.html',
  styleUrls: ['./lista-atividades.component.scss']
})
export class ListaAtividadesComponent extends BaseComponent implements OnInit {

  cidade: string = null;
  tipo: string = null;
  atividade: string = null;
  instituicao: string = null;

  telefonicos = [];
  presenciais = [];
  virtuais = [];
  eventos = [];

  cidadesFiltro: string[] = []
  instituicoesFiltro: string[] = []

  tempAtividades = [];

  // Diff entre procuro ajuda e quero ajudar
  titulo: string;
  apenasComVagas = false;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    super(router);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.titulo = data.title;
      this.apenasComVagas = data.apenasComVagas;
    })

    this.buscarVagas();
  }

  irParaVejaMais(item) {
    this.router.navigate(['./veja-mais', item.type, item.id]);
  }

  async buscarVagas() {
    this.loading = true;
    this.tempAtividades = [];

    const atdTelefonico = await axios.get('http://localhost:3000/atendimentos/telefonico', { params: { vagas: this.apenasComVagas, ativo: true } });
    atdTelefonico.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome as string,
        telefone: element.telefone,
        observacao: element.observacao,
        abrangencia: element.abrangencia,
        instituicao: element.instituicao.nome,
        type: 'telefonico'
      }
      this.tempAtividades.push(atd);
    });

    const atdPresencial = await axios.get('http://localhost:3000/atendimentos/presencial', { params: { vagas: this.apenasComVagas, ativo: true } });
    atdPresencial.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome as string,
        cidade: element.endereco.cidade,
        telefone: element.telefone,
        observacao: element.observacao,
        instituicao: element.instituicao.nome,
        type: 'presencial'
      }
      this.tempAtividades.push(atd);
    });

    const atdVirtuais = await axios.get('http://localhost:3000/atendimentos/virtual', { params: { vagas: this.apenasComVagas, ativo: true } });
    atdVirtuais.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome as string,
        telefone: element.telefone,
        observacao: element.observacao,
        endVirtual: element.enderecoVirtual,
        instituicao: element.instituicao.nome,
        type: 'virtual'
      }
      this.tempAtividades.push(atd);
    });

    const atdEventos = await axios.get('http://localhost:3000/eventos', { params: { vagas: this.apenasComVagas, ativo: true } });
    atdEventos.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome as string,
        cidade: element.endereco.cidade,
        telefone: element.telefone,
        observacao: element.observacao,
        // instituicao: element.instituicao.nome,
        type: 'evento'
      }
      this.tempAtividades.push(atd);
    });

    this.filtrarOpcoesCidades();
    this.categorizarAtendimentosPorTipo(this.tempAtividades);
  }

  categorizarAtendimentosPorTipo(atividades): void {
    this.virtuais = atividades.filter(x => x.type == 'virtual');
    this.eventos = atividades.filter(x => x.type == 'evento');
    this.presenciais = atividades.filter(x => x.type == 'presencial');
    this.telefonicos = atividades.filter(x => x.type == 'telefonico');
    this.loading = false;
  }

  filtrarOpcoesCidades(): void {
    const unique = [...new Set(this.tempAtividades.map(item => item.cidade))];
    this.cidadesFiltro = unique.map(x => {
      return x ? x.toString() : '';
    });
  }

  filtrarOpcoesInstituicoes(): void {
    const unique = [...new Set(this.tempAtividades.map(item => item.instituicao))];
    this.instituicoesFiltro = unique.map(x => {
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

    this.categorizarAtendimentosPorTipo(atividadesFiltradas);
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
}
