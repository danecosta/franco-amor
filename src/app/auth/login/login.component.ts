import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    if (this.email && this.password) {
      this.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(retorno => {
          console.log(retorno.user.email)
          localStorage.setItem('ativo', 'true')
          this.router.navigate(['home-admin']);
        }).catch(retorno => {

        });

    }
  }

  public async loginProprio(){
    const retorno = await axios.post('http://localhost:3000/usuarios/auth/login', {
      "username": this.email,
      "password": this.password
    });

    if(retorno.data) localStorage.setItem('fr-log-trace-id', retorno.data.access_token);
    const profile = await axios.get(`http://localhost:3000/usuarios/perfil/${retorno.data.uuid}`, {
      headers: {
        Authorization: 'Bearer ' + retorno.data.access_token
      }
     });

     localStorage.setItem('fr-user-data', profile.data);
     this.router.navigate(['home-admin']);
  }
  public recuperarSenha() {
    if (!this.email) {
      alert('Falta de campo obrigatório - Insira o e-mail para recuperação senha !')
    } else {
      this.auth.sendPasswordResetEmail(this.email)
        .then(retorno => {
          console.log('Sucesso ao enviar e-mail de recuperação de senha');
        }).catch(error => {
          console.log('Erro ao enviar e-mail de recuparação de senha');
        });
    }
  }

  logout() {
    if (this.auth.currentUser) {
      this.auth.signOut().then(retorno => {
        this.router.navigate(['home']);
        localStorage.setItem('ativo', 'false')
      }).catch(error => {
        console.log('Erro ao deslogar')
      })
    }
  }

}
