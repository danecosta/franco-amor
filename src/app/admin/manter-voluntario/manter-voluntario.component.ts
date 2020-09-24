import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-manter-voluntario',
  templateUrl: './manter-voluntario.component.html',
  styleUrls: ['./manter-voluntario.component.css']
})
export class ManterVoluntarioComponent extends BaseComponent implements OnInit {

  constructor(private modalService: NgbModal) {
    super();
  }

  ngOnInit(): void {
  }

  salvar() { }

  openModal(content) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = 'Fechado: $result';
      }, (reason) => {
        this.closeResult = 'Fechado';
      });
  }
}
