import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-virtual',
  templateUrl: './manter-virtual.component.html',
  styleUrls: ['./manter-virtual.component.css']
})
export class ManterVirtualComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  voltar() {
    history.back();
  }

  salvar() { }
}
