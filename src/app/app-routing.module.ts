import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: '/secure'},
    { path: 'secure', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '/secure'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
