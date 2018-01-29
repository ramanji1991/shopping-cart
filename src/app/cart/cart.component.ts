import { Component, OnInit } from '@angular/core';
import * as products from '../products.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:any;
  public _router: any;
  constructor(private router: Router) { 
    this._router = router;
    this.products = (<any>products).products;    
  }

  ngOnInit() {
  }

  gotoDetail(index){
    this.router.navigateByUrl('/Product-In-Detail/'+index);
  }

}
