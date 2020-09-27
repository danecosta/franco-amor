import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-listar-voluntario',
  templateUrl: './listar-voluntario.component.html',
  styleUrls: ['./listar-voluntario.component.css']
})
export class ListarVoluntarioComponent extends BaseComponent implements OnInit {

  voluntarios: any[] = [];

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  novoVoluntario() {
    this.router.navigate(['manter-voluntario']);
  }

}
