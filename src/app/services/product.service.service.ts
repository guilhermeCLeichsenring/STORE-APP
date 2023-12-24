import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ProductTotalList } from '../models/product-total-list.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  //GetById
  getById(id: number): Observable<ProductModel> {
    let product = this.http.get<ProductModel>(`${this.url}/${id}`);

    return product;
  }

  //GetAll
  getTotalListAll(): Observable<ProductTotalList> {
    return this.http.get<ProductTotalList>(`${this.url}`);
  }

  //Search
  getTotalListSearch(search: string): Observable<ProductTotalList> {
    return this.http.get<ProductTotalList>(`${this.url}/search?q=${search}`);
  }

  //GetCategoriesList
  getTotalListCategory(category: string): Observable<ProductTotalList> {
    return this.http.get<ProductTotalList>(`${this.url}/category/${category}`);
  }

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>(`${this.url}/categories`)
  }


}
