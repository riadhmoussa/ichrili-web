import { Component, OnInit  } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ICategory } from '../../../models/icategory';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.css']
})
export class CategoryMainComponent implements OnInit {
  category: ICategory= new ICategory();
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
      this.category = new ICategory();
  }

  removeCategory(index){
    console.log(this.categories[index]);
  }

  editCategory(index){
    console.log(this.categories[index]);
  }

}
