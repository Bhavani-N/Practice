import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AuthGuardService } from './auth-guard.service';
import { ContactComponent } from './contact.component';
import { DeactivateGuard } from './deactivate.guard';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ProductEditComponent } from './products/product-edit.component';
import { ProductResolverService } from './products/product-resolver.service';
import { ProductViewComponent } from './products/product-view.component';
import { ProductComponent } from './products/product/product.component';
import { Product1DetailComponent } from './products/product1-detail/product1-detail.component';
import { Product1Component } from './products/product1/product1.component';
import { Product2DetailComponent } from './products/product2-detail/product2-detail.component';
import { ProductListResolveService } from './products/productList-resolver.service';
import { RegisterComponent } from './register.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'register', component: RegisterComponent, canDeactivate: [DeactivateGuard] },
    { path: 'product1', component: Product1Component, canActivate: [AuthGuardService],
        children: [
            {  path: 'view/:id', component: ProductViewComponent  },
            {  path: 'edit/:id', component: ProductEditComponent  },
        ],
        canActivateChild: [AuthGuardService], },
    { path: 'product', component: ProductComponent,canActivate: [AuthGuardService],
        children: [
        {  path: 'view/:id', component: ProductViewComponent  },
        {  path: 'edit/:id', component: ProductEditComponent  },
      ],
    canActivateChild: [AuthGuardService],
     resolve: {products: ProductListResolveService} },
    { path: 'product1/:id', component: Product1DetailComponent, canActivate: [AuthGuardService]   },
    { path: 'product/:id', component: Product2DetailComponent,canActivate: [AuthGuardService] ,
     resolve: {product: ProductResolverService}},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ProductListResolveService, ProductResolverService]
})

export class AppRoutingModule {}