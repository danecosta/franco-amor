import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from 'src/app/_services/atendimento.service';
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
      this.atendimento = (await this.atendimentoService.getByIdByType('telefonico', id)).data;
  }

  salvar() { }
}
