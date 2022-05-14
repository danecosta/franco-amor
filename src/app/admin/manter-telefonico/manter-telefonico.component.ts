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

  constructor(private activatedRoute: ActivatedRoute,
    public router: Router) {
    super(router);

    this.activatedRoute.data.subscribe(data => {
      this.titulo = data.title;
    });
  }

  ngOnInit(): void {
    this.buscarAtividade();
  }

  async buscarAtividade() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
      this.atendimento = (await axios.get('http://localhost:3000/atendimentos/telefonico/' + id)).data;
  }

  salvar() { }
}
