import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;

    email: string;
    password: string;
    name: string;
    constructor(public auth: AngularFireAuth, private router: Router ) { }

    ngOnInit() {}

    public firebaseSignup(): void{
        if(this.email && this.password){
            this.auth
            .createUserWithEmailAndPassword(this.email,this.password)
            .then(data=> {
                
                this.enviarEmailConfirmacao(data);
                console.log('Usuário criado com sucesso',data);
                this.router.navigate(['home-admin']);

                }).catch(function(error) {
                                        console.log('Erro ao criar usuário',error);
                                        var errorCode = error.code;
                                        var errorMessage = error.message;
                });     
        } else {
            alert('Falta de campos obrigatórios');
        }       
    }


    private enviarEmailConfirmacao(data) {
        data.user.sendEmailVerification()
            .then(retorno => {
                console.log('sucesso ao enviar e-mail de confirmação');
            })
            .catch(e => {
                console.log('falhar ao enviar email de confirmação');
            });
    }
        
}
