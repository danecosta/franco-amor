import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-virtual',
  templateUrl: './manter-virtual.component.html',
  styleUrls: ['./manter-virtual.component.css']
})
export class ManterVirtualComponent implements OnInit {

  domingo = false;
  segunda = false;
  terca = false;
  quarta = false;
  quinta = false;
  sexta = false;
  sabado = false;

  valor: string;
  tipoPlataforma: string;

  constructor() { }

  ngOnInit(): void {
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
