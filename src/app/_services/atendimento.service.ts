import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  constructor() { }

  async getAllByType(type: string) {
    return await axios.get('http://localhost:3000/atendimentos/' + type);
  }

  async getByIdByType(type: string, id) {
    return await axios.get('http://localhost:3000/atendimentos/' + type + "/" + id);
  }
}
