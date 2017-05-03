import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { CategoryMainComponent } from './category-main/category-main.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { NavabarModule } from '../navabar/navabar.module';
import { NavbarComponent } from '../navabar/navbar/navbar.component';
import { AlertModule, ButtonsModule, CollapseModule,
  ModalModule, PaginationModule,AccordionModule, BsDropdownModule } from 'ng2-bootstrap';
import { UploadCategoryIconComponent } from './upload-category-icon/upload-category-icon.component';
import { NgUploaderModule } from 'ngx-uploader';
import { AlertService } from '../../services/alert.service';
import { NgxPaginationModule } from 'ngx-pagination';


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
    NavabarModule,
    NgUploaderModule,
    NgxPaginationModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CategoryMainComponent, UploadCategoryIconComponent],
  providers: [CategoryService, AlertService, BaseRequestOptions],
  exports: [CategoryMainComponent]
})
export class CategoryModule { }
