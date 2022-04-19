import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { BaseComponent } from '../base.component';
@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent extends BaseComponent implements OnInit {

  produtos: any[] = [];

  constructor(public router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.obterProdutos();
  }

  irParaManterProduto(item) {
    this.router.navigate(['manter-produto', item.id]);
  }

  novoProduto() {
    this.router.navigate(['manter-produto']);
  }

  async obterProdutos() {
    this.loading = true;
    const prod = await axios.get('http://localhost:3000/produtos');
    prod.data.forEach(element => {
      let prod = {
        id: element.id,
        nome: element.nome,
        valor: element.valor,
        estoque: element.estoque,
      }
      this.produtos.push(prod);
    });
    this.produtos = this.orderByName(this.produtos);
    this.loading = false;
  }

}
