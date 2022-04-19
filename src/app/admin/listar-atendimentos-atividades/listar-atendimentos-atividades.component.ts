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

  cidade: any;
  tipo: string = null;
  atividades: any[] = [];

  tooltipEvento = "Cursos, workshops, seminários, aulas, palestras na área da saúde mental voltados para público em geral seja presencial ou virtual";
  tooltipTelefonico = "Serviço de acolhimento emocional por telefone.";
  tooltipVirtual = "Apoio e atividades afins que acontecem virtualmente através de plataformas de videoconferência, chat, redes sociais, mensagens via aplicativo etc.";
  tooltipPresencial = "Reuniões de apoio, atendimento terapêutico e atividades similares que acontecem de forma presencial em grupo ou individualmente.";

  constructor(public router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.obterAtendimentos();
  }

  async obterAtendimentos() {
    this.loading = true;
    let tempAtividades = [];

    const atdTelefonico = await axios.get('http://localhost:3000/atendimentos/telefonico');
    atdTelefonico.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome,
        tipo: 'telefonico',
        local: element.abrangencia,
        instituicao: element.instuicao?.nome
      }
      tempAtividades.push(atd);
    });

    const atdPresencial = await axios.get('http://localhost:3000/atendimentos/presencial');
    atdPresencial.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome,
        tipo: 'presencial',
        instituicao: element.instuicao?.nome,
        local: element.endereco.cidade
      }
      tempAtividades.push(atd);
    });

    const atdVirtuais = await axios.get('http://localhost:3000/atendimentos/virtual');
    atdVirtuais.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome,
        tipo: 'virtual',
        instituicao: element.instuicao?.nome
      }
      tempAtividades.push(atd);
    });

    const atdEventos = await axios.get('http://localhost:3000/eventos');
    atdEventos.data.forEach(element => {
      let atd = {
        id: element.id,
        nome: element.nome,
        tipo: 'evento',
        instituicao: element.instituicao?.nome
      }
      tempAtividades.push(atd);
    });

    this.atividades = this.orderByName(tempAtividades);
    this.loading = false;
  }

  novoEvento() {
    this.router.navigate(['manter-evento']);
  }

  novoTelefonico() {
    this.router.navigate(['manter-telefonico']);
  }

  novoVirtual() {
    this.router.navigate(['manter-virtual']);
  }

  novoPresencial() {
    this.router.navigate(['manter-presencial']);
  }

  irParaManterAtendimentos(item) {
    this.router.navigate(['./manter-' + item.tipo, item.id]);
  }
}
