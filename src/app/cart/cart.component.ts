import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { products, Product} from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	products : Product[] = [];

	checkoutForm = this.formBuilder.group({'name':'', address: ''});

  	constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.products = this.getCart();
	}

	getCart()
	{
		return this.cartService.getCart();
	}

	onSubmit()
	{
		this.cartService.clearCart();
		window.alert('Your order has been placed');
		console.warn('Your order has been submitted', this.checkoutForm.value);
		this.checkoutForm.reset();
	}

}
