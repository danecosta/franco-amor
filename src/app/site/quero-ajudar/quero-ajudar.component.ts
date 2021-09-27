import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quero-ajudar',
  templateUrl: './quero-ajudar.component.html',
  styleUrls: ['./quero-ajudar.component.scss']
})
export class QueroAjudarComponent implements OnInit {

  cidade: string = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
