import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'
 import * as firebase from 'firebase/app';
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  email: string;
  password: string;

  constructor(private router: Router, public auth: AngularFireAuth) {  }

  ngOnInit() {
  }

  login() {
    if(this.email && this.password){
      console.log('click')
      this.auth.signInWithEmailAndPassword(this.email, this.password)
                .then(retorno => { 
                  console.log(retorno.user.displayName)
                  this.router.navigate(['home-admin']);
                }).catch(retorno => {

                });
      
    }
  }
  private recuperarSenha() {
    if(!this.email){
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
    if(this.auth.currentUser){
      this.auth.signOut().then(retorno => {
        this.router.navigate(['home']);
      }).catch(error => {
          console.log('Erro ao deslogar')
      })
    }
  }

  public recuperarSenha() {
    if(!this.email){
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

}
