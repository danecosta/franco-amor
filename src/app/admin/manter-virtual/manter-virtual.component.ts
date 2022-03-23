import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-manter-virtual',
  templateUrl: './manter-virtual.component.html',
  styleUrls: ['./manter-virtual.component.css']
})
export class ManterVirtualComponent extends BaseComponent implements OnInit {

  dataAtividade: string;
  dataAtividadeInicio: string;
  dataAtividadeFim: string;
  periodicidade: string = null;
  prazoIndefinido = false;
  dataPrazo:string;
  repete = false;
  domingo = true;
  segunda = true;
  terca = true;
  quarta = true;
  quinta = true;
  sexta = true;
  sabado = true;

  valor: string;
  tipoPlataforma: string;

  atendimento:any;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.buscarAtividade();
  }

  async buscarAtividade() {
    let id = this.route.snapshot.paramMap.get('id');
    this.atendimento = await (await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/virtual/' + id)).data;
    console.log(this.atendimento);
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
