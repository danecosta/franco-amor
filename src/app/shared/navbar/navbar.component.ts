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

    public status: string;

    constructor(public location: Location, private router: Router, public auth: AngularFireAuth) {

    }
    ngAfterViewChecked(): void {
       const result = localStorage.getItem('fr-log-trace-id');
       if(result) {
            this.status = '| Sair';
            return;
        } 
            this.status = '| Entrar';
    }
 
    ngOnInit() {
        const result = localStorage.getItem('fr-log-trace-id');
        if(result) {
            this.status = '| Sair';
        } else {
            this.status = '| Entrar';
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

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    }

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    }

    public logoutProprio() {
        localStorage.removeItem('fr-log-trace-id');
        localStorage.removeItem('fr-user-data');
        this.status = '| Entrar';
        this.router.navigate(['login']);   
    }

}
