import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { routes }   from './app.routes';
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AuthenticationModule } from "./components/authentication/authentication.module";
import { AccountService } from "./services/account.service";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        AuthenticationModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ProfileComponent
    ],
    providers: [
        AccountService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}