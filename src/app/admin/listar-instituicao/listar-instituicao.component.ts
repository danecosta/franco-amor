import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import axios from 'axios';


@Component({
  selector: 'app-listar-instituicao',
  templateUrl: './listar-instituicao.component.html',
  styleUrls: ['./listar-instituicao.component.css']
})
export class ListarInstituicaoComponent extends BaseComponent implements OnInit {

  public instituticoes: any[] = [];
  public nome;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    let inst = {nome: 'OLAAAA', email: 'aprima@instituti.com.br', cidade: 'PORTO', cnpj: '99534696000101', telefone: '55 555 555'}
    this.instituticoes.push(inst)
    this.obterInstituicoes();
  }

  ngAfterViewInit() {
    
  }
  novaInstituicao() {
    this.router.navigate(['manter-instituicao']);
  }

  async obterInstituicoes(){
    const inst = await axios.get('https://franco-amor-api.herokuapp.com/instituicoes');
    //console.log(inst)
    inst.data.forEach(element => {
      let inst = { nome: element.nome,
                  email: element.email,
                  cidade: element.endereco.cidade,
                  cnpj: element.cnpj,
                  telefone: element.telefone
      }
      this.instituticoes.push(inst);
    });
    this.nome = this.instituticoes[3].nome;
    console.log(this.instituticoes)
  }
}
