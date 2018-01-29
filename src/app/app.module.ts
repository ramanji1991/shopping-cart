import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routes } from '../app/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ChecklistModule } from 'angular-checklist';
import { BrandFilterPipe } from './brand-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    ProductDetailComponent,
    CartComponent,
    BrandFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes,
    ChecklistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
