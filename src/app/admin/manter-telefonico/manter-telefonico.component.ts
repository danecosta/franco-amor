import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-telefonico',
  templateUrl: './manter-telefonico.component.html',
  styleUrls: ['./manter-telefonico.component.css']
})
export class ManterTelefonicoComponent implements OnInit {

  domingo = false;
  segunda = false;
  terca = false;
  quarta = false;
  quinta = false;
  sexta = false;
  sabado = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
