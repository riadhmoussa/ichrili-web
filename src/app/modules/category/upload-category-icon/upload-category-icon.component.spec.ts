import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCategoryIconComponent } from './upload-category-icon.component';

describe('UploadCategoryIconComponent', () => {
  let component: UploadCategoryIconComponent;
  let fixture: ComponentFixture<UploadCategoryIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCategoryIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCategoryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
