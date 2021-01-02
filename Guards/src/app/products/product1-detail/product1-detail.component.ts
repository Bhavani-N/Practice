import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product1-detail',
  templateUrl: './product1-detail.component.html',
  styleUrls: ['./product1-detail.component.css']
})
export class Product1DetailComponent implements OnInit {

  product: Product;

  constructor(private _ActivatedRoute: ActivatedRoute, 
              private _router: Router, private _productsService: ProductService) { 
    let id = this._ActivatedRoute.snapshot.params['id'];
    console.log(id);
    this._productsService.getProduct(id).subscribe(data => {
      this.product = data
      console.log(this.product);
    })
  }

  ngOnInit(): void {
  }

}
