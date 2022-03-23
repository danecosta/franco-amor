import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-manter-telefonico',
  templateUrl: './manter-telefonico.component.html',
  styleUrls: ['./manter-telefonico.component.css']
})
export class ManterTelefonicoComponent extends BaseComponent implements OnInit {

  domingo = false;
  segunda = false;
  terca = false;
  quarta = false;
  quinta = false;
  sexta = false;
  sabado = false;

  atendimento: any;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.buscarAtividade();
  }

  async buscarAtividade() {
    let id = this.route.snapshot.paramMap.get('id');
    this.atendimento = await (await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/telefonico/' + id)).data;
    console.log(this.atendimento);
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
