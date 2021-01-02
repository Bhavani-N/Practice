import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { ProductService } from "./product.service";

@Injectable()
export class ProductResolverService implements Resolve<any> {

    constructor(private router: Router, private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        let id = route.paramMap.get('id');
        console.log("ProductResolverService  called with "+id);
        return this.productService.getProduct(id)
            .pipe(map(data => {
                if(data) {
                    console.log(data);
                    return data;
                } else {
                    console.log('redirecting');
                    this.router.navigate(['/product']);
                    return null
                }
            }))
    }
}