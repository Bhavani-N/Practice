import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";


@Injectable()
export class ProductListResolveService implements Resolve<any> {

    constructor(private _router: Router, private  productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log("ProductListResover is called");
        return this.productService.getProducts();
    }
}