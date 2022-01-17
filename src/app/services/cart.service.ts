import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItem:IProduct[] = [];
  cartItems = new BehaviorSubject(this._cartItem);

  constructor() { }

  addToCart(product: IProduct){
    this._cartItem.push(product);
    this.cartItems.next(this._cartItem)
    console.log(this._cartItem)
  }
}
