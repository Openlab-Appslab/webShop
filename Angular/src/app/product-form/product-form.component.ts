import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Product } from '../product';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService){
    this.product = new Product();
  }



  onSubmit() {
    this.productService.save(this.product).subscribe(result => this.gotoProductList());
  }

  gotoProductList() {
    this.router.navigate(['/products']);
  }
}