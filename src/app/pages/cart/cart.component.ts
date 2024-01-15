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
  productsInCart: any[] = [];

  totalPrice: number = 0;
  totalPriceDiscounted: string = '';

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    // geyt the observable list of products Id
    this.shared.getProductToCart().subscribe((result: ProductModel[]) => {
      this.productsInCart = result;
    });

    this.productsInCart = Array.from(this.productsInCart);
    this.sumTotalPrice();
  }

  // sum total price

  sumTotalPrice() {
    let totalDiscounted = 0;
    for (let prod of this.productsInCart) {
      this.totalPrice += prod.price;

      totalDiscounted += this.doDiscount(prod.price, prod.discountPercentage);
    }

    this.totalPriceDiscounted = this.transform(totalDiscounted, 2);
  }

  // Do discount

  doDiscount(price: number, decimalDiscount: number): any {
    decimalDiscount = decimalDiscount * 0.01;

    let discount: number = price * decimalDiscount;

    let productDisconted: number = price - discount;

    return parseFloat(this.transform(productDisconted, 2));
  }

  transform(value: number, digits: number): string {
    if (isNaN(value) || isNaN(digits) || digits <= 0) {
      return value.toString();
    }

    const factor = Math.pow(10, digits);
    const roundedValue = Math.round(value * factor) / factor;

    return roundedValue.toFixed(digits);
  }

  //delete

  btnDelete(product: ProductModel): void {
    let index = this.productsInCart.findIndex((item) => {
      item == product;
    });

    this.productsInCart.splice(index, 1);
    this.shared.removeProduct(product);

    this.totalPrice -= product.price;

    let totalDiscounted = 0;
    totalDiscounted = parseFloat(this.totalPriceDiscounted);

    totalDiscounted -= this.doDiscount(
      product.price,
      product.discountPercentage
    );

    this.totalPriceDiscounted = this.transform(totalDiscounted, 2);

    this.productsInCart = Array.from(this.productsInCart);
  }

  insertToList(product: ProductModel) {
    this.productsInCart.push(product);

    this.productsInCart = Array.from(this.productsInCart);
  }

  //btn buy

  btnBuy() {
    if (this.totalPrice > 0) {
      alert('Purchase completed!');
    } else {
      alert('Add some product to the shopping cart first!');
    }
  }
}
