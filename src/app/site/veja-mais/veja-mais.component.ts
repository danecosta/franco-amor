import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veja-mais',
  templateUrl: './veja-mais.component.html',
  styleUrls: ['./veja-mais.component.css']
})
export class VejaMaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copiarLink(){
    const url = window.location.href;
    navigator.clipboard.writeText(url).then().catch(e => console.error(e));
  }

  enviarWhatsapp(){
    const url = window.location.href;
    const message = "Oi! Vi essa atividade e lembrei de você: " + url;
    window.open("https://api.whatsapp.com/send?text="+message, "_blank");    
  }
}
