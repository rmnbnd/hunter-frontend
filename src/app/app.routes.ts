// app.routes.ts
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes = [{
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'profile',
    component: ProfileComponent
}];