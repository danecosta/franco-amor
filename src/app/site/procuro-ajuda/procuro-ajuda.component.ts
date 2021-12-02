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

  atividades=[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buscarAtividades();
  }

  irParaVejaMais() {
    this.router.navigate(['./veja-mais']);
  }

  async buscarAtividades(){
    const atv = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/presencial');

    atv.data.forEach(element => {
      let atv = { nome: element.nome,
                  email: element.email,
                  cidade: element.endereco.cidade,
                  cnpj: element.cnpj,
                  telefone: element.telefone
      }
      this.atividades.push(atv);
    });
  }

}
