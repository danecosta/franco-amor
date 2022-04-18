import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  nome: string;
  email: string;
  page: string;
  mensagem: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let page = this.route.snapshot.paramMap.get('page');
    if (page) {
      this.page = page;
    }
  }

}
