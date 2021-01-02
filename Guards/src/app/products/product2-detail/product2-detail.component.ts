import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product2-detail',
  templateUrl: './product2-detail.component.html',
  styleUrls: ['./product2-detail.component.css']
})
export class Product2DetailComponent implements OnInit {
  product: Product;

  constructor(private _ActivatedRoute: ActivatedRoute) {
      this.product = this._ActivatedRoute.snapshot.data['product'];
  }

  ngOnInit() {
    
  }

}
