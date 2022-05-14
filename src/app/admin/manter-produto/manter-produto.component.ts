import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import axios from 'axios';
import { ProdutoDTO } from 'src/app/_models/criar-produto.dto';
@Component({
  selector: 'app-manter-produto',
  templateUrl: './manter-produto.component.html',
  styleUrls: ['./manter-produto.component.css']
})
export class ManterProdutoComponent extends BaseComponent implements OnInit {

  produtoDTO = new ProdutoDTO();

  constructor(private modalService: NgbModal,
    public router: Router,
    private activatedRoute: ActivatedRoute) {
    super(router);

    this.activatedRoute.data.subscribe(data => {
      this.titulo = data.title;
    });
  }

  ngOnInit(): void {
    this.afuConfig.multiple = true;
    this.buscarProduto();
  }

  async buscarProduto() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
      this.produtoDTO = (await axios.get('http://localhost:3000/produtos/' + id)).data;
  }

  public async salvar() {
    this.loading = true;
    if (this.produtoDTO.nome) {
      await axios.post('http://localhost:3000/produtos', this.produtoDTO);
      this.router.navigate(['listar-produto'])
    }
    this.loading = false;
    this.voltarParaTab('produtos');

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
