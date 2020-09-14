import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-presencial',
  templateUrl: './manter-presencial.component.html',
  styleUrls: ['./manter-presencial.component.css']
})
export class ManterPresencialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
