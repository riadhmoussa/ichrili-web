import { Component, OnInit, Input } from '@angular/core';
import { IMarket } from '../../../models/imarket';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map-render',
  templateUrl: './map-render.component.html',
  styleUrls: ['./map-render.component.css']
})
export class MapRenderComponent implements OnInit {
  @Input() private market: IMarket = new IMarket();
  lat: number;
  lng: number;
  title: string;
  zoom = 16;
  showMap: boolean =false;

  constructor() {
  }

  ngOnInit() {
    if (this.market.position.latitude && this.market.position.longitude) {
      this.lat = parseFloat(this.market.position.latitude.toLocaleString());
      this.lng = parseFloat(this.market.position.longitude.toLocaleString());
      this.showMap=true;
    }
    this.title = this.market.market_name;
  }

}
