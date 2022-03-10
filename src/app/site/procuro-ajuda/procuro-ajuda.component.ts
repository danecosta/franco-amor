import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-procuro-ajuda',
  templateUrl: './procuro-ajuda.component.html',
  styleUrls: ['./procuro-ajuda.component.scss']
})
export class ProcuroAjudaComponent implements OnInit {

  cidade: string = null;
  tipo: string = null;

  telefonicos = [];
  presenciais = [];
  virtuais = [];
  eventos = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buscarAtendimentos();
  }

  irParaVejaMais(item) {
    this.router.navigate(['./veja-mais', item.type, item.id ]);
  }

  async buscarAtendimentos() {
    const atdTelefonico = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/telefonico');
    atdTelefonico.data.forEach(element => {
      let atd = {
        id:element.id,
        nome: element.nome as string,
        email: element.email,
        telefone: element.telefone,
        observacao: element.observacao,
        type: 'telefonico'
      }
      this.telefonicos.push(atd);
    });

    const atdPresencial = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/presencial');
    atdPresencial.data.forEach(element => {
      let atd = {
        id:element.id,
        nome: element.nome,
        email: element.email,
        telefone: element.telefone,
        observacao: element.observacao,
        type: 'presencial'
      }
      this.presenciais.push(atd);
    });

    const atdVirtuais = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/virtual');
    atdVirtuais.data.forEach(element => {
      let atd = {
        id:element.id,
        nome: element.nome,
        email: element.email,
        telefone: element.telefone,
        observacao: element.observacao,
        type: 'virtual'
      }
      this.virtuais.push(atd);
    });

    const atdEventos = await axios.get('https://franco-amor-api.herokuapp.com/eventos');
    atdEventos.data.forEach(element => {
      let atd = {
        id:element.id,
        nome: element.nome,
        email: element.email,
        telefone: element.telefone,
        observacao: element.observacao,
        type: 'evento'
      }
      this.eventos.push(atd);
    });
  }

}
