import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { BaseComponent } from '../base.component';
@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css']
})
export class ListarPostagemComponent extends BaseComponent implements OnInit {

  postagens: any[] = [];

  constructor(public router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.obterPostagens();
  }

  irParaManterPostagem(item) {
    this.router.navigate(['manter-postagem', item.id]);
  }

  async obterPostagens() {
    this.loading = true;
    const inst = await axios.get('http://localhost:3000/postagens');

    inst.data.forEach(element => {
      let inst = {
        id: element.id,
        titulo: element.titulo,
        autor: element.autor,
        data: element.dt_insercao
      }
      this.postagens.push(inst);
    });
    this.loading = false;
  }

  novaPostagem() {
    this.router.navigate(['manter-postagem']);
  }

}
