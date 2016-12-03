import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {User} from "../../models/user";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router"

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
    private userAuthenticatedSubscription: Subscription;

    authenticatedUser: User;

    constructor(
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.userAuthenticatedSubscription = this.accountService.userAuthenticated.subscribe(
            (authenticated) => this.loadAuthenticatedUser());
    }

    private loadAuthenticatedUser(): void {
        this.accountService.getAuthenticatedUser()
            .subscribe(user => {
                if(user) {
                    this.authenticatedUser = user;
                }
            });
    }

    ngOnDestroy(): void {
        this.userAuthenticatedSubscription.unsubscribe();
    }

    logout() {
        this.accountService.logout(
            () => {
                this.authenticatedUser = null;
                this.router.navigate(['/'])
            }
        );
    }

}