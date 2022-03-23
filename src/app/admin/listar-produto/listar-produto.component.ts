import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: any[] = [];

  constructor(private router: Router) { }

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
    const prod = await axios.get('https://franco-amor-api.herokuapp.com/produtos');
    prod.data.forEach(element => {
      let prod = {
        id: element.id,
        nome: element.nome,
        valor: element.valor,
        estoque: element.estoque,
      }
      this.produtos.push(prod);
    });
  }

}
