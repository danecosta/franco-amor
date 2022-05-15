import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoDTO } from 'src/app/_models/criar-produto.dto';
import { ProdutoService } from 'src/app/_services/produto.service';
import { BaseComponent } from '../base.component';

export class FiltroProduto {
  nome: string = null;
}
@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent extends BaseComponent implements OnInit {

  tempProdutos = [];
  produtos: any[] = [];

  filtro = new FiltroProduto();

  constructor(public router: Router,
    private produtoService: ProdutoService) {
    super(router);
  }

  ngOnInit(): void {
    this.obterProdutos();
  }

  irParaManterProduto(item) {
    this.router.navigate(['editar-produto', item.id]);
  }

  novoProduto() {
    this.router.navigate(['cadastrar-produto']);
  }

  async obterProdutos() {
    this.loading = true;
    const prod = await this.produtoService.getAll();
    prod.data.forEach(element => {
      let prod = {
        id: element.id,
        nome: element.nome,
        valor: element.valor,
        estoque: element.estoque,
        ativo: element.ativo
      }
      this.tempProdutos.push(prod);
    });
    this.produtos = this.orderByName(this.tempProdutos);
    this.loading = false;
  }

  filtrar(): void {
    let produtosFiltrados = Object.assign(this.tempProdutos);

    if (this.filtro.nome && this.filtro.nome.trim() != '')
      produtosFiltrados = this.filtrarNome(produtosFiltrados);

    this.produtos = Object.assign(produtosFiltrados);
    this.loading = false;
  }

  filtrarNome(produtos): any[] {
    return produtos.filter(x => x.nome && x.nome.indexOf(this.filtro.nome) > -1);
  }

  async atualizarStatus(produto: ProdutoDTO) {
    produto.ativo = !produto.ativo;
    await this.produtoService.updateProduto(produto);
  }

}
