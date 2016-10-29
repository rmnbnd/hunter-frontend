import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    jwt: string;

    constructor() {
        this.jwt = localStorage.getItem('id_token');
    }

    logout() {
        localStorage.removeItem('id_token');
        delete this.jwt;
    }

}