import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-evento',
  templateUrl: './manter-evento.component.html',
  styleUrls: ['./manter-evento.component.css']
})
export class ManterEventoComponent implements OnInit {

  domingo = false;
  segunda = false;
  terca = false;
  quarta = false;
  quinta = false;
  sexta = false;
  sabado = false;

  valor: string;
  participacao: string;

  constructor() { }

  ngOnInit(): void {
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
