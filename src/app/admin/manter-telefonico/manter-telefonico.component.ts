import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
    public router: Router) {
    super(router);
  }

  ngOnInit(): void {
    this.buscarAtividade();
  }

  async buscarAtividade() {
    let id = this.route.snapshot.paramMap.get('id');
    this.atendimento = await (await axios.get('http://localhost:3000/atendimentos/telefonico/' + id)).data;
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
