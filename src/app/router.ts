//Modules
import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Component Pages
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

export const router: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Home', component: HomeComponent},
    { path: 'Product-In-Detail/:index', component: ProductDetailComponent}, 
    { path: 'Cart', component: CartComponent},
  ]
  export const routes: ModuleWithProviders = RouterModule.forRoot(router);
  