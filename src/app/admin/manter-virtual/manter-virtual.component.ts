import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from 'src/app/_services/atendimento.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-manter-virtual',
  templateUrl: './manter-virtual.component.html',
  styleUrls: ['./manter-virtual.component.css']
})
export class ManterVirtualComponent extends BaseComponent implements OnInit {

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

  constructor(private activatedRoute: ActivatedRoute,
    public router: Router,
    private atendimentoService: AtendimentoService) {
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
      this.atendimento = (await this.atendimentoService.getByIdByType('virtual', id)).data;
  }

  salvar() { }
}
