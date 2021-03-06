import { Component, Input, OnInit } from '@angular/core';
import { IProduct, Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product: IProduct = new Product();

  constructor() { }

  ngOnInit(): void {
  }

}
