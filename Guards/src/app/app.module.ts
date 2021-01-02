import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product/product.component';
import { Product1Component } from './products/product1/product1.component';
import { Product2DetailComponent } from './products/product2-detail/product2-detail.component';
import { Product1DetailComponent } from './products/product1-detail/product1-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register.component';
import { ProductEditComponent } from './products/product-edit.component';
import { DeactivateGuard } from './deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Product1Component,
    Product2DetailComponent,
    Product1DetailComponent,
    LoginComponent,
    RegisterComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService, AuthService, DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
