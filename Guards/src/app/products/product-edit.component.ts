import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    template: `<h1>Edit Product</h1>`,
})
export class ProductEditComponent implements OnInit {

    product: Product;

    constructor(private productService: ProductService, private route: ActivatedRoute) {}

    ngOnInit() {
        let id = this.route.snapshot.params['id'];

        this.productService.getProduct(id)
            .subscribe(data => {
                this.product = data;
            })
    }
}