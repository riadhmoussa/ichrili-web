import {
  Component, OnInit, Output, ViewChild,
  AfterViewInit, EventEmitter
} from '@angular/core';
import { MarketService } from '../../../services/market.service';
import { IMarket, IAddress, IPosition } from '../../../models/imarket';
import { AlertService } from '../../../services/alert.service';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchMarketPipe } from '../search-market.pipe';
import _ from 'lodash/lodash';

const path = 'http://localhost:4000/uploads/marketlogos/';

@Component({
  selector: 'app-market-main',
  templateUrl: './market-main.component.html',
  styleUrls: ['./market-main.component.css']
})
export class MarketMainComponent implements OnInit {
  @ViewChild('lgModal') public lgModal: ModalDirective;
  @ViewChild('lgAddModal') public lgAddModal: ModalDirective;

  market: IMarket = new IMarket();
  model: any = {};
  markets: IMarket[] = [];
  address: IAddress;
  position: IPosition;
  loading = false;
  p: number = 1;
  total: number = 0;
  searchString: string = '';

  constructor(private marketService: MarketService,
    private alertService: AlertService) {
    this.address = new IAddress();
    this.position = new IPosition();
  }

  ngOnInit() {
    this.marketService.getAll()
      .subscribe(markets => {
        this.markets = markets;
        this.markets.map((market) => {
          if (market.logo_url) {
            market.logo_url = path + market.logo_url;
          }
        });
      });
    this.total = this.markets.length;
  }

  displayForm() {
    this.lgAddModal.show();
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
    this.initilize();
    this.lgAddModal.hide();
    this.ngOnInit();
  }

  removeMarket(id) {
    let market = _.filter(this.markets, ['_id', id])[0];
    console.log(market);
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


  editMarket(id) {
    this.model = _.filter(this.markets, ['_id', id])[0];
    this.address = this.model.address;
    this.position = this.model.position;
    this.lgModal.show();
  }

  updateMarket() {
    this.model = Object.assign({}, this.model);
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
    this.initilize();
    this.ngOnInit();
  }

  initilize() {
    this.market = new IMarket();
    this.address = new IAddress();
    this.position = new IPosition();
  }
}
