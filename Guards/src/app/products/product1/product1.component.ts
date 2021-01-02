import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  public products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
      console.log('ngOnInit');
      this.productService.getProducts().subscribe(data => {
          this.products = data;
      });
    }

}
