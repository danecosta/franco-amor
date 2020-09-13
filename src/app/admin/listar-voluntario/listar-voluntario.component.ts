import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-voluntario',
  templateUrl: './listar-voluntario.component.html',
  styleUrls: ['./listar-voluntario.component.css']
})
export class ListarVoluntarioComponent implements OnInit {

  voluntarios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
