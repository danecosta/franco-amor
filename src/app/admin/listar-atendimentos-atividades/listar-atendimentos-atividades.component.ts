import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-atendimentos-atividades',
  templateUrl: './listar-atendimentos-atividades.component.html',
  styleUrls: ['./listar-atendimentos-atividades.component.css']
})
export class ListarAtendimentosAtividadesComponent implements OnInit {

  tipo: string = null;
  atividades: any[] = [];

  tooltipEvento = "Cursos, workshops, seminários, aulas, palestras na área da saúde mental voltados para público em geral seja presencial ou virtual";
  tooltipTelefonico = "Serviço de acolhimento emocional por telefone.";
  tooltipVirtual = "Apoio e atividades afins que acontecem virtualmente através de plataformas de videoconferência, chat, redes sociais, mensagens via aplicativo etc.";
  tooltipPresencial = "Reuniões de apoio, atendimento terapêutico e atividades similares que acontecem de forma presencial em grupo ou individualmente.";

  constructor(private router: Router) { }

  ngOnInit(): void {
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

}
