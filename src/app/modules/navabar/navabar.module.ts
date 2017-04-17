import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [NavbarComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[NavbarComponent]
})
export class NavabarModule { }
