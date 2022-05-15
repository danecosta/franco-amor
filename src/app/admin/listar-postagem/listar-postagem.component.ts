import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostagemService } from 'src/app/_services/postagem.service';
import { BaseComponent } from '../base.component';

export class FiltroPostagem {
  titulo: string = null;
  autor: string = null;
}
@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css']
})
export class ListarPostagemComponent extends BaseComponent implements OnInit {

  tempPostagens = [];
  postagens: any[] = [];
  filtro: FiltroPostagem = new FiltroPostagem();

  constructor(public router: Router,
    private postagemService: PostagemService) {
    super(router);
  }

  ngOnInit(): void {
    this.obterPostagens();
  }

  irParaManterPostagem(item) {
    this.router.navigate(['editar-postagem', item.id]);
  }

  async obterPostagens() {
    this.loading = true;
    const inst = await this.postagemService.getAll();

    inst.data.forEach(element => {
      let inst = {
        id: element.id,
        titulo: element.titulo,
        autor: element.autor,
        data: element.dt_insercao,
        ativo: element.ativo
      }
      this.tempPostagens.push(inst);
    });

    this.postagens = this.tempPostagens.sort((a, b) => a.titulo.localeCompare(b.titulo));
    this.loading = false;
  }

  filtrar(): void {
    let postagensFiltradas = Object.assign(this.tempPostagens);

    if (this.filtro.titulo && this.filtro.titulo.trim() != '')
      postagensFiltradas = this.filtrarTitulo(postagensFiltradas);

    if (this.filtro.autor && this.filtro.autor.trim() != '')
      postagensFiltradas = this.filtrarAutor(postagensFiltradas);

    this.postagens = Object.assign(postagensFiltradas);
    this.loading = false;
  }

  filtrarTitulo(postagens): any[] {
    return postagens.filter(x => x.nome && x.nome.indexOf(this.filtro.titulo) > -1);
  }

  filtrarAutor(postagens): any[] {
    return postagens.filter(x => x.nome && x.nome.indexOf(this.filtro.autor) > -1);
  }

  novaPostagem() {
    this.router.navigate(['cadastrar-postagem']);
  }

}
