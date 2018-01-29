import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as products from '../products.json';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public index:any;
  public products:any;
  public product:any;
  public _router:any;
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {
    this.index = '';
    this._router = router;
    this.product = {};
    this.products = (<any>products).products; 
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      var that = this;
      that.index = params['index'];  
      that.product = that.products[that.index];             
    }); 
  }

}
