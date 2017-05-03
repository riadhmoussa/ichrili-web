import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketMainComponent } from './market-main/market-main.component';
import { MarketService } from '../../services/market.service';
import { AlertService } from '../../services/alert.service';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap/alert';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { NavabarModule } from '../navabar/navabar.module';
import { NgUploaderModule } from 'ngx-uploader';
import { UploadMarketLogoComponent } from './upload-market-logo/upload-market-logo.component';
import { AgmCoreModule } from '@agm/core';
import { AppConfig } from '../../app.config';
import { MapRenderComponent } from './map-render/map-render.component';
import {NgxPaginationModule} from 'ngx-pagination'


@NgModule({
  imports: [
    CommonModule,
    FormsModule, HttpModule, AlertModule.forRoot(),
    AccordionModule.forRoot(), ButtonsModule.forRoot(),
    CollapseModule.forRoot(), BsDropdownModule.forRoot(),
    ModalModule.forRoot(), PaginationModule.forRoot(),
    NavabarModule, NgUploaderModule, AgmCoreModule.forRoot({ apiKey: 'AIzaSyCUArzI_3xatd_VtjymyH1QP-26mR8zPnQ' }),
    NgxPaginationModule
  ],
  declarations: [MarketMainComponent, UploadMarketLogoComponent, MapRenderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MarketService, AlertService, BaseRequestOptions],
  exports: [MarketMainComponent]
})
export class MarketModule { }
