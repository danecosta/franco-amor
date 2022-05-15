import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/_services/usuario.service';

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
    private modalService: NgbModal,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  login() {
    if (this.email && this.password) {
      this.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(retorno => {
          localStorage.setItem('ativo', 'true')
          this.router.navigate(['home-admin']);
        }).catch(retorno => {

        });

    }
  }

  public async loginProprio() {
    const retorno = await this.usuarioService.login(this.email, this.password);

    if (retorno.data) localStorage.setItem('fr-log-trace-id', retorno.data.access_token);
    const profile = await this.usuarioService.getUserProfile(retorno.data.uuid, retorno.data.access_token);

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
