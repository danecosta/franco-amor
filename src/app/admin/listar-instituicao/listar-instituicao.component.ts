import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-listar-instituicao',
  templateUrl: './listar-instituicao.component.html',
  styleUrls: ['./listar-instituicao.component.css']
})
export class ListarInstituicaoComponent extends BaseComponent implements OnInit {

  instituticoes: any[] = [];

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  novaInstituicao() {
    this.router.navigate(['manter-instituicao']);
  }
}
