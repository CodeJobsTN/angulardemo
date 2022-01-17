import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, of, range } from 'rxjs';
import { IProduct, Product } from 'src/app/models/product.model';
import { productList } from '../product-data';
import { filter, map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId = '';
  product: IProduct = new Product();

  constructor(private activatedRouter: ActivatedRoute, private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    // get productName
    this.productId = this.activatedRouter.snapshot.params['id'];

    this.productService.getProductById(this.productId).subscribe(product => {
      this.product = product;
    });

  }
  addToCArt(){
    this.cartService.addToCart(this.product)
  }
}
