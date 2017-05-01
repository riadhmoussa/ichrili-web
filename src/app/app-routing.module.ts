import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { HomeComponent } from './containers/home/home.component';
import { AuthGuard } from './guards/auth.guards';
import { RegisterComponent } from './register/register.component';
import { UpdateSettingsComponent } from './modules/settings/update-settings/update-settings.component';
import { NavabarModule } from './modules/navabar/navabar.module';
import { CategoryMainComponent } from './modules/category/category-main/category-main.component';
import { MarketMainComponent } from './modules/market/market-main/market-main.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'user/settings', component: UpdateSettingsComponent, canActivate: [AuthGuard] },
  { path: 'categories/main', component: CategoryMainComponent, canActivate: [AuthGuard] },
  { path: 'markets/main', component: MarketMainComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NavabarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

