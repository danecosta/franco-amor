import { Injectable } from '@angular/core';
import axios from 'axios';
import { InstituicaoDTO } from '../_models/instituicao.dto';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  constructor() { }

  async getAll() {
    return await axios.get('http://localhost:3000/instituicoes');
  }

  async getById(id) {
    return await axios.get('http://localhost:3000/instituicoes/' + id);
  }

  async createInstituicao(inst: InstituicaoDTO) {
    await axios.post('http://localhost:3000/instituicoes', inst);
  }

  async updateInstituicao(inst: InstituicaoDTO) {
    await axios.put('http://localhost:3000/instituicoes', inst);
  }
}
