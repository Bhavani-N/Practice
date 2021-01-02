import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
    // console.log(this.route.snapshot.data)
  }

}
