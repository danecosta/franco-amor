import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-instituicao',
  templateUrl: './manter-instituicao.component.html',
  styleUrls: ['./manter-instituicao.component.css']
})
export class ManterInstituicaoComponent implements OnInit {

  model: any;
  constructor() { }

  ngOnInit(): void {
  }

  voltar() {
    history.back();
  }

  salvar() { }

}
