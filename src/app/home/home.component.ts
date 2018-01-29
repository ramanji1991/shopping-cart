import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as products from '../products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products:any;
  public filters:any;
  public brands:any;
  public _router: any;
  constructor(private router: Router) { 
    this._router = router;
    this.brands = [];
    this.filters = (<any>products).filters;  
    this.products = (<any>products).products;    
  }

  ngOnInit() {
  }

  gotoDetail(index){
    this.router.navigateByUrl('/Product-In-Detail/'+index);
  }

}
