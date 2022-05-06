import { Component, Input } from '@angular/core';
import { CategoryModel } from 'src/app/core/models/categories.model';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-list-of-types',
  templateUrl: './list-of-types.component.html',
  styleUrls: ['./list-of-types.component.css']
})
export class ListOfTypesComponent  {

  @Input() listOfProducts: ProductModel[];

  captionText = 'List of products';
  listOfCategories: CategoryModel[] = [];

}
