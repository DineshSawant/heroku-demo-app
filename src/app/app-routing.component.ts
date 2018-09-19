import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutusComponent } from '../app/components/aboutus/aboutus.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { LoginComponent } from 'src/app/components/login/login.component';

const appRoutes: Routes = [
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}