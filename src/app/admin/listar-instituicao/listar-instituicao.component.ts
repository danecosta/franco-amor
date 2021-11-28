import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import  axios  from "axios";

export class Filtro {
  nome: string;
  cnpj: string;
  cidade: string;
}
@Component({
  selector: 'app-listar-instituicao',
  templateUrl: './listar-instituicao.component.html',
  styleUrls: ['./listar-instituicao.component.css']
})
export class ListarInstituicaoComponent extends BaseComponent implements OnInit {

  filtro: Filtro = new Filtro();
  instituicoes: any[] = [];

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.buscarInstituicoes();
  }

  novaInstituicao() {
    this.router.navigate(['manter-instituicao']);
  }

  async buscarInstituicoes(){
    const inst = await axios.get('https://franco-amor-api.herokuapp.com/instituicoes');

    inst.data.forEach(element => {
      let inst = { nome: element.nome,
                  email: element.email,
                  cidade: element.endereco.cidade,
                  cnpj: element.cnpj,
                  telefone: element.telefone
      }
      this.instituicoes.push(inst);
    });
  }
}
