import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  closeResult: string;

  constructor(private router: Router,
    public auth: AngularFireAuth,
    private modalService: NgbModal) { }

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
    const retorno = await axios.post('https://franco-amor-api.herokuapp.com/usuarios/auth/login', {
      "username": this.email,
      "password": this.password
    });

    if(retorno.data) localStorage.setItem('fr-log-trace-id', retorno.data.access_token);
    const profile = await axios.get(`https://franco-amor-api.herokuapp.com/usuarios/perfil/${retorno.data.uuid}`, {
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

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content, { centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    }
  }

}
