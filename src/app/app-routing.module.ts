import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { HomeComponent } from './containers/home/home.component';
import { AuthGuard } from './guards/auth.guards';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

