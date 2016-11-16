import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {Http, Headers} from "@angular/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AccountService {

    private authenticatedUserSource = new BehaviorSubject<boolean>(false);
    userAuthenticated = this.authenticatedUserSource.asObservable();

    constructor(private http: Http) {
    }

    getAuthenticatedCustomer(): Observable<User> {
        return this.http.get(`/api/customers/search/findCurrentCustomer`)
            .map(res =>  res.json() as User);
    }

    getAuthenticatedPerformer(): Observable<User> {
        return this.http.get(`/api/performers/search/findCurrentPerformer`)
            .map(res =>  res.json() as User);
    }

    signIn(user: User, callback: any): void {
        this.http.post('/api/login', `username=${user.username}&password=${user.password}`,
            {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})})
            .subscribe(
                () => {
                    this.authenticatedUserSource.next(true);
                    callback();
                }
            );
    }

    logout(callback: any): void {
        this.http.post('/api/logout', '').subscribe(
            () => this.http.options('api').subscribe(callback));
    }

}