import { ActivatedRoute, Router } from '@angular/router';
import { CriarProdutoDTO } from './dto/criar-produto.dto';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import axios from 'axios';
@Component({
  selector: 'app-manter-produto',
  templateUrl: './manter-produto.component.html',
  styleUrls: ['./manter-produto.component.css']
})
export class ManterProdutoComponent extends BaseComponent implements OnInit {

  criarProdutoDTO = new CriarProdutoDTO();

  constructor(private modalService: NgbModal,
    public router: Router,
    private route: ActivatedRoute) {
    super(router);
  }

  ngOnInit(): void {
    this.afuConfig.multiple = true;
    this.buscarProduto();
  }

  async buscarProduto() {
    let id = this.route.snapshot.paramMap.get('id');
    this.criarProdutoDTO = await (await axios.get('https://franco-amor-api.herokuapp.com/produtos/' + id)).data;
  }

  async salvar() {
    if (this.criarProdutoDTO.nome) {
      await axios.post('https://franco-amor-api.herokuapp.com/produtos', this.criarProdutoDTO);
      this.router.navigate(['listar-produto'])
    } else {
      alert('Erro ao registrar produto')
    }

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
