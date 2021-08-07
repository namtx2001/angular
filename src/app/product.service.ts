import { Injectable } from '@angular/core';
import { ProductType } from './product/product';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  // providedIn: 'root'
)
export class ProductService {
  // products: ProductType[] = dataFake;
  API: string = 'https://60f75f8f9cdca00017454e19.mockapi.io/namtx';
  //http://localhost:4000/api/products
  constructor(private http: HttpClient) { }
  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.API);
    // return this.products;
  }
  get(id: any): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.API}/${id}`);
  }
  addProduct(item: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.API, item);
    // this.products.push(item);
    //   console.log(this.products);
  }

  removeProduct(id: number): Observable<ProductType> {
    return this.http.delete<ProductType>(`${this.API}/${id}`);
  }

  updateProduct(item: ProductType): Observable<ProductType> {
    return this.http.put<ProductType>(`${this.API}/${item.id}`, item);
  }
  getCategory() {
    // call api
  }
}
