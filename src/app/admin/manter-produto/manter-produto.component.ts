import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import { ProdutoDTO } from 'src/app/_models/criar-produto.dto';
import { ProdutoService } from 'src/app/_services/produto.service';
@Component({
  selector: 'app-manter-produto',
  templateUrl: './manter-produto.component.html',
  styleUrls: ['./manter-produto.component.css']
})
export class ManterProdutoComponent extends BaseComponent implements OnInit {

  produtoDTO = new ProdutoDTO();

  constructor(private modalService: NgbModal,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService) {
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
      this.produtoDTO = (await this.produtoService.getById(id)).data;
  }

  public async salvar() {
    this.loading = true;
    if (this.produtoDTO.nome) {
      this.produtoService.createProduto(this.produtoDTO);
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
