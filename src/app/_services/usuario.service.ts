import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  async login(username, password) {
    return await axios.post('http://localhost:3000/usuarios/auth/login', {
      "username": username,
      "password": password
    })
  }

  async getUserProfile(uuid, access_token) {
    return await axios.get(`http://localhost:3000/usuarios/perfil/${uuid}`, {
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    })
  }
}
