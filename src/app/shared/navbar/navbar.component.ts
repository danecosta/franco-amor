import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewChecked {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    statusOn = 'Sair';
    statusOff = 'Entrar';

    public status: string;

    constructor(public location: Location, private router: Router, public auth: AngularFireAuth) {

    }
    ngAfterViewChecked(): void {
       const result = localStorage.getItem('fr-log-trace-id');
       if(result) {
            this.status = this.statusOn;
            return;
        } 
            this.status = this.statusOff;
    }
 
    ngOnInit() {
        const result = localStorage.getItem('fr-log-trace-id');
        if(result) {
            this.status = this.statusOn;
        } else {
            this.status = this.statusOff;
        }

        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (event instanceof NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
    }

    logout() {
        if(this.auth.currentUser) {
            this.auth.signOut().then(retorno => {
            this.router.navigate(['home']);
            this.status = this.statusOff
            }).catch(error => {
                console.log('Erro ao deslogar')
            })
        } else {
            this.router.navigate(['login']);
        }
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    public logoutProprio() {
        localStorage.removeItem('fr-log-trace-id');
        localStorage.removeItem('fr-user-data');
        this.status = this.statusOff;
        this.router.navigate(['login']);   
    }

}
