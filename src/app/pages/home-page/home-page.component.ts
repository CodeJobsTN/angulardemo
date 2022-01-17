import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { productList } from '../product-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productList: IProduct[]= [];

  constructor(private productService: ProductService) { }

  trackByData(index:number, product:any): string {
    return product.name;
 }

  ngOnInit(): void {
    this.getProductList();
  }

  //products: Observable<IProduct[]> = new Observable();
  getProductList(){
    this.productService.getProducts().subscribe(products => {
      this.productList = products
    })
    //this.products = this.productService.getProducts();
  }

}
