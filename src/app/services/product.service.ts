import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(environment.baseUrl + "api/products");
  }

  getProductById(id: string): Observable<IProduct>{
    return this.http.get<IProduct>(environment.baseUrl + "api/products/" + id);
  }

  createProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(environment.baseUrl + "api/products" , product);
  }

  updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(environment.baseUrl + "api/products" , product);
  }

  deleteProductById(id: string): Observable<void>{
    return this.http.delete<void>(environment.baseUrl + "api/products/" + id);
  }
}
