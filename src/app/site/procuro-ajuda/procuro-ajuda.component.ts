import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procuro-ajuda',
  templateUrl: './procuro-ajuda.component.html',
  styleUrls: ['./procuro-ajuda.component.scss']
})
export class ProcuroAjudaComponent implements OnInit {

  cidade: string = null;
  tipo: string = null;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaVejaMais() {
    this.router.navigate(['./veja-mais']);
  }

}
