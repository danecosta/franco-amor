import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procuro-ajuda',
  templateUrl: './procuro-ajuda.component.html',
  styleUrls: ['./procuro-ajuda.component.scss']
})
export class ProcuroAjudaComponent implements OnInit {

  cidade: string = null;
  tipo: string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
