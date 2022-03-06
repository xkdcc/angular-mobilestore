import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  // Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute 
  // as an argument within the constructor's parentheses.
  // ActivatedRoute is specific to each component that the Angular Router loads. 
  // ActivatedRoute contains information about the route and the route's parameters.
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
