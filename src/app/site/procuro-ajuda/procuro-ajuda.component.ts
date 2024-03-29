import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  axios  from "axios";

@Component({
  selector: 'app-procuro-ajuda',
  templateUrl: './procuro-ajuda.component.html',
  styleUrls: ['./procuro-ajuda.component.scss']
})
export class ProcuroAjudaComponent implements OnInit {

  cidade: string = null;
  tipo: string = null;

  telefonicos=[];
  presenciais=[];
  virtuais=[];
  eventos=[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buscarAtendimentos();
  }

  irParaVejaMais() {
    this.router.navigate(['./veja-mais']);
  }

  async buscarAtendimentos(){
    const atdTelefonico = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/telefonico');
    atdTelefonico.data.forEach(element => {
      let atd = { nome: element.nome,
                  email: element.email,
                  cnpj: element.cnpj,
                  telefone: element.telefone,
                  observacao: element.observacao
      }
      this.telefonicos.push(atd);
    });

    const atdPresencial = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/presencial');
    atdPresencial.data.forEach(element => {
      let atd = { nome: element.nome,
                  email: element.email,
                  cnpj: element.cnpj,
                  telefone: element.telefone,
                  observacao: element.observacao
      }
      this.presenciais.push(atd);
    });

    const atdVirtuais = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/virtual');
    atdVirtuais.data.forEach(element => {
      let atd = { nome: element.nome,
                  email: element.email,
                  cnpj: element.cnpj,
                  telefone: element.telefone,
                  observacao: element.observacao
      }
      this.virtuais.push(atd);
    });

    const atdEventos = await axios.get('https://franco-amor-api.herokuapp.com/eventos');
    atdEventos.data.forEach(element => {
      let atd = { nome: element.nome,
                  email: element.email,
                  cnpj: element.cnpj,
                  telefone: element.telefone,
                  observacao: element.observacao
      }
      this.eventos.push(atd);
    });
  }

}
