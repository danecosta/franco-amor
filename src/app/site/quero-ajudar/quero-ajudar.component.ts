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
  tipo: string = null;
  
  vagas = [];

  telefonicos=[];
  presenciais=[];
  virtuais=[];
  eventos=[];

  cidades: string[] = ["Juiz de Fora", "Rio de Janeiro"]
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buscarVagas();
  }

  irParaVejaMais(item) {
    this.router.navigate(['./veja-mais', item.type, item.id ]);
  }

  async buscarVagas() {
    //TODO: Recuperar somente os ativos!!
    const atdTelefonico = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/telefonico', { params: { vagas: true } });
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

    const atdPresencial = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/presencial', { params: { vagas: true } });
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

    const atdVirtuais = await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/virtual', { params: { vagas: true } });
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

    const atdEventos = await axios.get('https://franco-amor-api.herokuapp.com/eventos', { params: { vagas: true } });
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
