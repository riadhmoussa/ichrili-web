import { NavbarComponent } from '../navabar/navbar/navbar.component';
import { NavabarModule } from '../navabar/navabar.module';

import {ButtonsModule}from 'ng2-bootstrap/buttons'; 
import {ModalModule}from 'ng2-bootstrap/modal'; 
import {NgModule, CUSTOM_ELEMENTS_SCHEMA }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {UpdateSettingsComponent }from '../update-settings/update-settings.component'; 
import {UploadAvatarComponent }from '../upload-avatar/upload-avatar.component'; 
import {UserService}from '../../services/user.service'; 
import {AuthGuard}from '../../guards/auth.guards'; 
import {AlertService}from '../../services/alert.service'; 
import {HttpModule, BaseRequestOptions}from '@angular/http'; 
import {BrowserModule }from '@angular/platform-browser'; 
import {FormsModule }from '@angular/forms'; 
import {AlertModule}from 'ng2-bootstrap/alert'; 
import {AccordionModule}from 'ng2-bootstrap/accordion'; 


@NgModule( {
imports:[
    CommonModule, 
BrowserModule, 
HttpModule, 
FormsModule, 
AlertModule.forRoot(), 
AccordionModule.forRoot(), 
ButtonsModule.forRoot(), 
ModalModule.forRoot(),
NavabarModule
], 
declarations:[UpdateSettingsComponent, UploadAvatarComponent], 
providers:[UserService, AuthGuard, AlertService, BaseRequestOptions], 
schemas:[ CUSTOM_ELEMENTS_SCHEMA ], 


})
export class SettingsModule {}
