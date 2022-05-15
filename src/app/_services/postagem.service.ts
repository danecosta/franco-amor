import { Injectable } from '@angular/core';
import axios from 'axios';
import { PostagemDTO } from '../_models/postagem.dto';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor() { }

  async getAll() {
    return await axios.get('http://localhost:3000/postagens');
  }

  async getById(id) {
    return await axios.get('http://localhost:3000/postagens/' + id);
  }

  async createPostagem(postagem: PostagemDTO) {
    await axios.post('http://localhost:3000/postagens', postagem);
  }
}
