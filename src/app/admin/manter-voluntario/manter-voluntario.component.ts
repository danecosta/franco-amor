import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-voluntario',
  templateUrl: './manter-voluntario.component.html',
  styleUrls: ['./manter-voluntario.component.css']
})
export class ManterVoluntarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
