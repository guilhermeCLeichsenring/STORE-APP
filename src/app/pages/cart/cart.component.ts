import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // Página em manutenção, ainda não consegue montar um array de id
  //para chamalos no componente shoppping card, de maneira que funcione corretamente

  listId: number[] = [];
  productsInCart: any[] = [];
  emptyCart: string = '';
  productModel: any;

  constructor(
    private productService: ProductService,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    this.shared.getProductToCart().subscribe((result: number[]) => {
      console.log(result);
    });
    //console.log(this.listId);
    this.productsInCart = Array.from(this.productsInCart);
  }

  getProductById(id: number) {
    this.productService.getById(id).subscribe((response: ProductModel) => {
      this.productModel = response;
    });
  }

  btnDelete(product: ProductModel): void {
    let index = this.productsInCart.findIndex((item) => {
      item == product;
    });

    this.productsInCart.splice(index, 1);

    this.productsInCart = Array.from(this.productsInCart);
  }

  insertToList(product: ProductModel) {
    this.productsInCart.push(product);

    this.productsInCart = Array.from(this.productsInCart);
  }
}
