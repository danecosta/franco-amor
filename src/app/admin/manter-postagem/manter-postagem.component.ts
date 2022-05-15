import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';
import { PostagemDTO } from 'src/app/_models/postagem.dto';
import { PostagemService } from 'src/app/_services/postagem.service';
@Component({
  selector: 'app-manter-postagem',
  templateUrl: './manter-postagem.component.html',
  styleUrls: ['./manter-postagem.component.css']
})
export class ManterPostagemComponent extends BaseComponent implements OnInit {

  categoria: string = null;

  postagemDTO = new PostagemDTO();

  constructor(private modalService: NgbModal,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private postagemService: PostagemService) {
    super(router);

    this.activatedRoute.data.subscribe(data => {
      this.titulo = data.title;
    });
  }

  ngOnInit(): void {
    this.buscarPostagem();
  }

  async buscarPostagem() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
      this.postagemDTO = (await this.postagemService.getById(id)).data;
  }

  public async salvar() {
    this.loading = true;
    if (this.postagemDTO.titulo)
      await this.postagemService.createPostagem(this.postagemDTO);
    this.router.navigate(['listar-postagem']);
    this.loading = false;
    this.voltarParaTab('postagens');
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
