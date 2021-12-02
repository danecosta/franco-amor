import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css']
})
export class ListarPostagemComponent implements OnInit {

  postagens: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.obterPostagens();
  }

  async obterPostagens() {
    const inst = await axios.get('https://franco-amor-api.herokuapp.com/postagens');

    inst.data.forEach(element => {
      let inst = {  titulo: element.titulo,
                    autor: element.autor,
                   data: element.dt_insercao
      }
      this.postagens.push(inst);
    });
  }

  novaPostagem() {
    this.router.navigate(['manter-postagem']);
  }

}
