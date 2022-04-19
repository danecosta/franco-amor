import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private modalService: NgbModal,
    public router: Router,
    private route: ActivatedRoute) {
    super(router);
  }

  ngOnInit(): void {
    this.buscarPostagem();
  }

  async buscarPostagem() {
    let id = this.route.snapshot.paramMap.get('id');
    this.criarPostagemDTO = await (await axios.get('http://localhost:3000/postagens/' + id)).data;
  }

  async salvar() {
    if (this.criarPostagemDTO.autor)
      await axios.post('http://localhost:3000/postagens', this.criarPostagemDTO);
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
