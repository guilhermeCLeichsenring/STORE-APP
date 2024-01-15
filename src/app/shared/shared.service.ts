import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _username: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private _productId: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private _productIdToCart: BehaviorSubject<ProductModel[]> =
    new BehaviorSubject<ProductModel[]>([]);

  private _navSearch: BehaviorSubject<string> = new BehaviorSubject<string>('');

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

  public updateCart(newProduct: ProductModel[]) {
    this._productIdToCart.next(newProduct);
  }

  public addProduct(product: ProductModel) {
    const currentProducts = this._productIdToCart.value;
    const newList = [...currentProducts, product];

    this.updateCart(newList);
  }

  public removeProduct(product: ProductModel) {
    const currentProducts = this._productIdToCart.value;
    const newList = currentProducts.filter((i) => i !== product);

    this.updateCart(newList);
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
    this._navCategory.next(search);
  }

  public getNavCategory() {
    return this._navCategory.asObservable();
  }
}
