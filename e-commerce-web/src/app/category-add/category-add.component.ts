import { CategoryService } from './../service/category.service';
import { Category } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {


  categories: Category[];

  selectedCategory = 0;
  categoryNameChanged = "";

  constructor(private router:Router, private categoryService: CategoryService) { }

  ngOnInit() {


    //call service
    this.categoryService.findCategory(null)
      .subscribe(response => {
        //console.log(response);
        this.categories = response;

      });

  }

  save() {
    console.log(this.categoryNameChanged);
    
    if (this.categoryNameChanged.length > 0) {
      this.categoryService.save(null, this.categoryNameChanged, this.selectedCategory).subscribe(res => {
        this.router.navigate(['/categories']);
      });
    }
  }

}
