import { Injectable } from '@angular/core';
import { ProdutoDTO } from '../_models/criar-produto.dto';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  async getAll() {
    return await axios.get('http://localhost:3000/produtos');
  }

  async getById(id) {
    return await axios.get('http://localhost:3000/produtos/' + id);
  }

  async createProduto(produto: ProdutoDTO) {
    await axios.post('http://localhost:3000/produtos', produto);
  }
}
