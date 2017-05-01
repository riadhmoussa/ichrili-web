import { Component, OnInit, Output, ViewChild,
      AfterViewInit, EventEmitter } from '@angular/core';
import { MarketService } from '../../../services/market.service';
import { IMarket, IAddress, IPosition } from '../../../models/imarket';
import { AlertService } from '../../../services/alert.service';
import { ModalDirective } from 'ng2-bootstrap/modal';

const path = 'http://localhost:4000/uploads/marketlogos/';

@Component({
  selector: 'app-market-main',
  templateUrl: './market-main.component.html',
  styleUrls: ['./market-main.component.css']
})
export class MarketMainComponent implements OnInit {

  @ViewChild('lgModal') public lgModal: ModalDirective;
  market: IMarket= new IMarket();
  model: any= {} ;
  markets: IMarket []= [];
  address: IAddress= new IAddress();
  position: IPosition = new IPosition();
  loading = false;

  constructor(private marketService: MarketService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.marketService.getAll()
    .subscribe(markets => {
      this.markets = markets;
      this.markets.map((market) => {
        if ( market.logo_url) {
          market.logo_url = path + market.logo_url;
        }
      });
    });
  }

  addMarket() {
    this.loading = true;
    this.market.address = this.address;
    this.market.position = this.position;
    this.market = Object.assign({}, this.market);
    this.marketService.create(this.market)
    .subscribe(
      data => {
        this.alertService.success('Market successfully added', true);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
      this.loading = false;
      this.ngOnInit();
      this.market = new IMarket();
      this.address = new IAddress();
      this.position = new IPosition();
  }

  removeMarket(index) {
    let market = Object(this.markets[index]);
    this.marketService.delete(market._id)
    .subscribe(
      data => {
        this.alertService.success('Market removed successufully', true);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
      this.loading = false;
      this.ngOnInit();
  }


  editMarket(index) {
    this.model = Object(this.markets[index]);
    this.model.id = this.model._id;
    this.lgModal.show();
  }

  updateMarket() {
     this.marketService.update(this.model)
     .subscribe(
       data => {
          this.alertService.success('Market updated successufully', true);
       },
       error => {
          this.alertService.error(error._body);
        this.loading = false;
       }
     );
     this.loading = false;
     this.ngOnInit();
  }

}
