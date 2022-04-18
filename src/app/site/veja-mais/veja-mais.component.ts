import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-veja-mais',
  templateUrl: './veja-mais.component.html',
  styleUrls: ['./veja-mais.component.css']
})
export class VejaMaisComponent implements OnInit {

  atendimento:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarAtividade();
  }

  async buscarAtividade() {
    let type = this.route.snapshot.paramMap.get('type');
    let id = this.route.snapshot.paramMap.get('id');

    if (type == 'evento') {
      this.atendimento = await (await axios.get('https://franco-amor-api.herokuapp.com/eventos/' + id)).data;
    } else {
      this.atendimento = await (await axios.get('https://franco-amor-api.herokuapp.com/atendimentos/' + type + '/' + id)).data;
    }

    console.log(this.atendimento)
  }

  copiarLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then().catch(e => console.error(e));
  }

  enviarWhatsapp() {
    const url = window.location.href;
    const message = "Oi! Vi essa atividade e lembrei de você: " + url;
    window.open("https://api.whatsapp.com/send?text=" + message, "_blank");
  }
}
