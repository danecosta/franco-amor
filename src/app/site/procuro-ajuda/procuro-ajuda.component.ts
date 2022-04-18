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

  cidades: string[] = ["Juiz de Fora", "Rio de Janeiro"] //TODO: Filtrar cidades retornadas

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buscarAtendimentos();
  }

  irParaVejaMais(item) {
    this.router.navigate(['./veja-mais', item.type, item.id ]);
  }

  async buscarAtendimentos() {
    //TODO: Recuperar somente os ativos!!
    const atdTelefonico = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/telefonico');
    atdTelefonico.data.forEach(element => {
      let atd = {
        id:element.id,
        nome: element.nome as string,
        telefone: element.telefone,
        observacao: element.observacao,
        abrangencia: element.abrangencia,
        instituicao: element.instituicao.nome,
        type: 'telefonico'
      }
      this.telefonicos.push(atd);
    });

    const atdPresencial = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/presencial');
    atdPresencial.data.forEach(element => {
      let atd = {
        id:element.id,
        nome: element.nome as string,
        cidade: element.endereco.cidade,
        telefone: element.telefone,
        observacao: element.observacao,
        instituicao: element.instituicao.nome,
        type: 'presencial'
      }
      this.presenciais.push(atd);
    });

    const atdVirtuais = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/virtual');
    atdVirtuais.data.forEach(element => {
      let atd = {
        id:element.id,
        nome: element.nome as string,
        telefone: element.telefone,
        observacao: element.observacao,
        endVirtual : element.enderecoVirtual,
        instituicao: element.instituicao.nome,
        type: 'virtual'
      }
      this.virtuais.push(atd);
    });

    const atdEventos = await axios.get('https://franco-amor-api.herokuapp.com/eventos');
    atdEventos.data.forEach(element => {
      console.log(element)
      let atd = {
        id:element.id,
        nome: element.nome as string,
        cidade: element.endereco.cidade,
        telefone: element.telefone,
        observacao: element.observacao,
        // instituicao: element.instituicao.nome,
        type: 'evento'
      }
      this.eventos.push(atd);
    });
  }

  filtrarCidade(cidade){

  }

}
