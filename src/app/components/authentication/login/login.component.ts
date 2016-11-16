import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../../../services/account.service";
import { User } from "../../../models/user";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    user: User = new User();

    constructor(
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    login(): void {
        this.accountService.signIn(this.user, () => this.router.navigate(['/']));
    }

}