import {NavabarModule }from './modules/navabar/navabar.module';
import {RatingModule }from 'ng2-bootstrap/rating'; 
import {PaginationModule }from 'ng2-bootstrap/pagination';
import {ModalModule }from 'ng2-bootstrap/modal';
import {BsDropdownModule }from 'ng2-bootstrap/dropdown';
import {CollapseModule }from 'ng2-bootstrap/collapse';
import {CarouselModule }from 'ng2-bootstrap/carousel';
import {ButtonsModule }from 'ng2-bootstrap/buttons';
import {AccordionModule }from 'ng2-bootstrap/accordion';
import {AlertModule }from 'ng2-bootstrap/alert';
import {BrowserModule }from '@angular/platform-browser';
import {NgModule }from '@angular/core';
import {FormsModule }from '@angular/forms';
import {HttpModule, BaseRequestOptions }from '@angular/http';

import {AppRoutingModule }from './app-routing.module';
import {AppComponent }from './app.component';
import {LoginComponent }from './ui/login/login.component';
import {HomeComponent }from './containers/home/home.component';
import {UserService }from './services/user.service';
import {AuthenticationService }from './services/authentication.service';
import {AuthGuard }from './guards/auth.guards';
import {RegisterComponent }from './register/register.component';
import {AlertComponent }from './directives/alert/alert.component';
import {AlertService }from './services/alert.service';
import {AppConfig }from './app.config';
import {SettingsModule }from './modules/settings/settings.module';
import {CUSTOM_ELEMENTS_SCHEMA }from '@angular/core';
import {UserBadgeComponent }from './ui/user-badge/user-badge.component';

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent,
        AlertComponent,
        UserBadgeComponent
      ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AlertModule.forRoot(),
        AccordionModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        RatingModule.forRoot(),
        SettingsModule,
        NavabarModule],
    providers:  [UserService,
      AuthenticationService,
      AuthGuard,
      AlertService,
      BaseRequestOptions,
      AppConfig],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
