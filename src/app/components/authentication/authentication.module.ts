import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../authentication/login/login.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class AuthenticationModule { }