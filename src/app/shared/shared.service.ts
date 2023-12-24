import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  _username: BehaviorSubject<string> = new BehaviorSubject<string>('');

  _productId: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  _productIdToCart: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([
    0,
  ]);

  _navSearch: BehaviorSubject<string> = new BehaviorSubject<string>('');

  _navCategory: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  // Username

  // Criação do método verificador de autenticação
  isAuthenticated(): boolean {
    let user = this._username.getValue();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  public setUsername(username: string) {
    this._username.next(username);
  }

  public getUsername() {
    return this._username.asObservable();
  }

  //Product Id

  public setProduct(productId: number) {
    this._productId.next(productId);
  }

  public getProduct() {
    return this._productId.asObservable();
  }

  //Product Id To Cart

  public setProductToCart(productId: number) {
    this.getProductToCart().subscribe((oldArray: number[]) => {
      let newArray: number[] = [...oldArray];

      newArray.push(productId);

      this._productIdToCart.next(newArray);
    });
  }

  public getProductToCart() {
    return this._productIdToCart.asObservable();
  }

  // Nav Search

  public setNavSearch(search: string) {
    this._navSearch.next(search);
  }

  public getNavSearch() {
    return this._navSearch.asObservable();
  }

  // Nav Category

  public setNavCategory(search: string) {
    this._navSearch.next(search);
  }

  public getNavCategory() {
    return this._navSearch.asObservable();
  }
}
