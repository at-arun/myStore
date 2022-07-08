import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  appTitle = "My store";
  cartCount:number | undefined; 
  constructor(private router:Router, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getItemCount().subscribe((count)=>{
      this.cartCount = count;
    });

  }

  get CartCount(): number {
    let items = this.cartService.items;
    return items.length;
  }
  showCart()
  {
  	this.router.navigate(['cart']);
  }
}
