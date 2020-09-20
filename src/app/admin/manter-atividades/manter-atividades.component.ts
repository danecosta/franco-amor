import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-atividades',
  templateUrl: './manter-atividades.component.html',
  styleUrls: ['./manter-atividades.component.css']
})
export class ManterAtividadesComponent implements OnInit {

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
