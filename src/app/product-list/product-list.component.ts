import { Component, OnInit } from '@angular/core';
import {products} from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = products;

  share()
  {
  	alert('Product shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
