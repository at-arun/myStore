import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	productId:number = 0;
	product:Product | undefined;

  	constructor(private route: ActivatedRoute,
  				private cartService: CartService
  	) { }

	ngOnInit(): void {
		const routeParams = this.route.snapshot.paramMap;
  		this.productId = Number(routeParams.get('productId'));

  		this.product = products.find(product=>product.id === this.productId);
	}

	addToCart(product: Product)
	{
		this.cartService.addToCart(product);
		alert('Product added to cart');
	}
}
