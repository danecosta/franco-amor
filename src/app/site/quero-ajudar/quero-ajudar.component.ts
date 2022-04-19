import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  axios  from "axios";
import { BaseComponent } from 'src/app/admin/base.component';

@Component({
  selector: 'app-quero-ajudar',
  templateUrl: './quero-ajudar.component.html',
  styleUrls: ['./quero-ajudar.component.scss']
})
export class QueroAjudarComponent extends BaseComponent implements OnInit {

  cidade: string = null;
  tipo: string = null;
  
  vagas = [];

  telefonicos=[];
  presenciais=[];
  virtuais=[];
  eventos=[];

  cidades: string[] = ["Juiz de Fora", "Rio de Janeiro"]
  
  constructor(public router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.buscarVagas();
  }

  irParaVejaMais(item) {
    this.router.navigate(['./veja-mais', item.type, item.id ]);
  }

  async buscarVagas() {
    this.loading = true;
    let tempAtividades = [];

    //TODO: Recuperar somente os ativos!!
    const atdTelefonico = await axios.get('http://localhost:3000/atendimentos/telefonico', { params: { vagas: true } });
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
      tempAtividades.push(atd);
    });

    const atdPresencial = await axios.get('http://localhost:3000/atendimentos/presencial', { params: { vagas: true } });
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
      tempAtividades.push(atd);
    });

    const atdVirtuais = await axios.get('http://localhost:3000/atendimentos/virtual', { params: { vagas: true } });
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
      tempAtividades.push(atd);
    });

    const atdEventos = await axios.get('http://localhost:3000/eventos', { params: { vagas: true } });
    atdEventos.data.forEach(element => {
      let atd = {
        id:element.id,
        nome: element.nome as string,
        cidade: element.endereco.cidade,
        telefone: element.telefone,
        observacao: element.observacao,
        // instituicao: element.instituicao.nome,
        type: 'evento'
      }
      tempAtividades.push(atd);
    });

    this.virtuais = tempAtividades.filter(x=>x.type == 'virtual');
    this.eventos = tempAtividades.filter(x=>x.type == 'evento');
    this.presenciais = tempAtividades.filter(x=>x.type == 'presencial');
    this.telefonicos = tempAtividades.filter(x=>x.type == 'telefonico');
    this.loading = false;
  }

  filtrarCidade(cidade){

  }

}
