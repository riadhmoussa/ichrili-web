import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { HomeComponent } from './containers/home/home.component';
import { AuthGuard } from './guards/auth.guards';
import { RegisterComponent } from './register/register.component';
import { UpdateSettingsComponent } from './modules/update-settings/update-settings.component';
import { NavabarModule } from './modules/navabar/navabar.module';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'user/settings', component: UpdateSettingsComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NavabarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

