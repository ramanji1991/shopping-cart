import { Component, OnInit } from '@angular/core';

import * as products from '../products.json';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public filters:any;
  constructor() { 
    this.filters = (<any>products).filters;    
  }

  ngOnInit() {
  }

}
