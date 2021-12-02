import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quero-ajudar',
  templateUrl: './quero-ajudar.component.html',
  styleUrls: ['./quero-ajudar.component.scss']
})
export class QueroAjudarComponent implements OnInit {

  cidade: string = null;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaVejaMais() {
    this.router.navigate(['./veja-mais']);
  }

}
