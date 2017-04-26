import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { CategoryMainComponent } from './category-main/category-main.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavabarModule } from '../navabar/navabar.module';
import { NavbarComponent } from '../navabar/navbar/navbar.component';
import { AlertModule, ButtonsModule, CollapseModule,
  ModalModule, PaginationModule,AccordionModule, BsDropdownModule } from 'ng2-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    NavabarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CategoryMainComponent],
  providers: [CategoryService],
  exports: [CategoryMainComponent]
})
export class CategoryModule { }
