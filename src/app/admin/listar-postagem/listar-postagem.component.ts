import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css']
})
export class ListarPostagemComponent implements OnInit {

  postagens: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  novaPostagem() {
    this.router.navigate(['manter-postagem']);
  }

}
