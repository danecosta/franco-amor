import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private _router:Router, public auth: AngularFireAuth ) {
    }
 
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        let usuario = await this.auth.currentUser;
        const result = localStorage.getItem('ativo');
            console.log(usuario)
        // if (!usuario || !usuario.email)  {
        //     this._router.navigate(['login']);
        //     return false;
        // }
        if(result === "false") {
            this._router.navigate(['login']);
            return false;
        }
        
        return true;
    }
 
}