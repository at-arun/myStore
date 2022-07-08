import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

	items:Product[] = [];

	itemCount:BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor(private http:HttpClient) { }

	addToCart(product: Product)
	{
		this.items.push(product);
		this.updateItemCount();
	}

	getCart()
	{
		return this.items;
	}

	getItemCount()
	{
		return this.itemCount.asObservable();
	}

	clearCart()
	{
		this.items = [];
		this.updateItemCount();
		return this.items;
	}

	updateItemCount()
	{
		this.itemCount.next(this.items.length);
	}

	getShippingPrice()
	{
		return this.http.get<{type:string, price:number}[]>('/assets/shipping.json');
	}
}
