import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-voluntario',
  templateUrl: './listar-voluntario.component.html',
  styleUrls: ['./listar-voluntario.component.css']
})
export class ListarVoluntarioComponent implements OnInit {

  voluntarios: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  novoVoluntario() {
    this.router.navigate(['manter-voluntario']);
  }

}
