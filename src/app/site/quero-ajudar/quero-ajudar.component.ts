import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  axios  from "axios";

@Component({
  selector: 'app-quero-ajudar',
  templateUrl: './quero-ajudar.component.html',
  styleUrls: ['./quero-ajudar.component.scss']
})
export class QueroAjudarComponent implements OnInit {

  cidade: string = null;
  vagas = [];

  telefonicos=[];
  presenciais=[];
  virtuais=[];
  eventos=[];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buscarVagas();
  }

  irParaVejaMais(item) {
    this.router.navigate(['./veja-mais', item.type, item.id ]);
  }

  async buscarVagas(){
    const atdTelefonico = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/telefonico', { params: { vagas: true } });
    atdTelefonico.data.forEach(element => {
      let atd = { 
        id:element.id,
        nome: element.nome,
                  email: element.email,
                  cnpj: element.cnpj,
                  telefone: element.telefone,
                  observacao: element.observacao,
                  type: 'telefonico'
      }
      this.vagas.push(atd);
    });

    const atdPresencial = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/presencial', { params: { vagas: true } });
    atdPresencial.data.forEach(element => {
      let atd = { id:element.id,
        nome: element.nome,
                  email: element.email,
                  cnpj: element.cnpj,
                  telefone: element.telefone,
                  observacao: element.observacao,
                  type: 'presencial'
      }
      this.vagas.push(atd);
    });

    const atdVirtuais = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/virtual', { params: { vagas: true } });
    atdVirtuais.data.forEach(element => {
      let atd = { id:element.id,
        nome: element.nome,
                  email: element.email,
                  cnpj: element.cnpj,
                  telefone: element.telefone,
                  observacao: element.observacao,
                  type: 'virtual'
      }
      this.vagas.push(atd);
    });

    const atdEventos = await axios.get('https://franco-amor-api.herokuapp.com/eventos', { params: { vagas: true } });
    atdEventos.data.forEach(element => {
      let atd = { id:element.id,
        nome: element.nome,
                  email: element.email,
                  cnpj: element.cnpj,
                  telefone: element.telefone,
                  observacao: element.observacao,
                  type: 'evento'
      }
      this.vagas.push(atd);
    });
  }

}
