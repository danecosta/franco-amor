import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  novoProduto() {
    this.router.navigate(['manter-produto']);
  }

}
