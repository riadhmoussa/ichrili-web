import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ICategory } from '../../../models/icategory';
import { AlertService } from '../../../services/alert.service';
import { ModalDirective } from 'ng2-bootstrap/modal';


@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.css']
})
export class CategoryMainComponent implements OnInit {
  @ViewChild('lgModal') public lgModal: ModalDirective;
  category: any= {};
  model: any= {} ;
  categories: ICategory[]= [];
  loading = false;

  constructor(private categoryService: CategoryService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.categoryService.getAll()
    .subscribe(categories => this.categories = categories );
  }

  addCategory() {
    this.loading = true;
    this.categoryService.create(this.category)
    .subscribe(
      data => {
        this.alertService.success('Category successfully added', true);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
      this.loading = false;
      this.ngOnInit();
      this.category = {};
  }

  removeCategory(index) {
    let category = Object(this.categories[index]);
    this.categoryService.delete(category._id)
    .subscribe(
      data => {
        this.alertService.success('Category removed successufully', true);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
      this.loading = false;
      this.ngOnInit();
  }


  editCategory(index) {
    this.model = Object(this.categories[index]);
    this.model.id = this.model._id;
    this.lgModal.show();
  }

  updateCategory() {
     this.categoryService.update(this.model)
     .subscribe(
       data => {
          this.alertService.success('Category updated successufully', true);
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
