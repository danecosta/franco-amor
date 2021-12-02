import { Router } from '@angular/router';
import { CriarPostagemDTO } from './../shared/dto/criar-postagem.dto';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import axios from 'axios';
@Component({
  selector: 'app-manter-postagem',
  templateUrl: './manter-postagem.component.html',
  styleUrls: ['./manter-postagem.component.css']
})
export class ManterPostagemComponent extends BaseComponent implements OnInit {

  categoria: string = null;

  criarPostagemDTO = new CriarPostagemDTO(); 

  constructor(private modalService: NgbModal, private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  async  salvar() {
    if(this.criarPostagemDTO.autor)
    await axios.post('https://franco-amor-api.herokuapp.com/postagens', this.criarPostagemDTO);
    this.router.navigate(['listar-postagem']);
  }

  openModal(content) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = 'Fechado: $result';
      }, (reason) => {
        this.closeResult = 'Fechado';
      });
  }

}
