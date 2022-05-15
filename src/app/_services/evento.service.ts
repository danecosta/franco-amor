import { Injectable } from '@angular/core';
import axios from 'axios';
import { EventoDTO } from '../_models/evento.dto';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  async getAll() {
    return await axios.get('http://localhost:3000/eventos');
  }

  async getById(id) {
    return await axios.get('http://localhost:3000/eventos/' + id);
  }

  async createEvento(evento: EventoDTO) {
    await axios.post('http://localhost:3000/eventos', evento);
  }
}
