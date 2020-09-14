import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-instituicao',
  templateUrl: './listar-instituicao.component.html',
  styleUrls: ['./listar-instituicao.component.css']
})
export class ListarInstituicaoComponent implements OnInit {

  instituticoes: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  novaInstituicao() {
    this.router.navigate(['manter-instituicao']);
  }
}
