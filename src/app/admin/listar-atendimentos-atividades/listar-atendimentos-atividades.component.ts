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
