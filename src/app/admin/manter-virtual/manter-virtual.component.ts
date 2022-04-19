import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-manter-virtual',
  templateUrl: './manter-virtual.component.html',
  styleUrls: ['./manter-virtual.component.css']
})
export class ManterVirtualComponent extends BaseComponent implements OnInit {

  acao: string = 'Cadastrar';
  tooltipValorSocial = 'O valor não será divulgado pelo site, mas é obrigatória a apresentação dessa informação para conhecimento e preservação da legitimidade das atividades divulgadas pelo Franco Amor.';

  dataAtividade: string;
  dataAtividadeInicio: string;
  dataAtividadeFim: string;
  periodicidade: string = null;
  prazoIndefinido = false;
  dataPrazo: string;
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
    if (id)
      this.atendimento = await (await axios.get('http://localhost:3000/atendimentos/virtual/' + id)).data;
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
