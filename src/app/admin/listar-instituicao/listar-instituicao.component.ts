import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-instituicao',
  templateUrl: './listar-instituicao.component.html',
  styleUrls: ['./listar-instituicao.component.css']
})
export class ListarInstituicaoComponent implements OnInit {

  instituticoes: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
