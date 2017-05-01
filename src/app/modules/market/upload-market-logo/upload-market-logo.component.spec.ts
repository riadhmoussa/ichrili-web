import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMarketLogoComponent } from './upload-market-logo.component';

describe('UploadMarketLogoComponent', () => {
  let component: UploadMarketLogoComponent;
  let fixture: ComponentFixture<UploadMarketLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMarketLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMarketLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
