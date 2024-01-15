import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productId: number = 0;
  product: any;

  subscription!: Subscription;

  constructor(private shared: SharedService, private service: ProductService) {
    this.subscription = this.shared.getProduct().subscribe((id: number) => {
      this.productId = id;

      if (this.productId != 0) {
        this.getProductById(this.productId);
      } else {
        console.log("Can't find the product");
      }
    });
  }

  // Get Product

  getProductById(id: number) {
    this.service.getById(id).subscribe((response: ProductModel) => {
      this.product = response;
    });
  }

  // Do discount

  doDiscount(): number {
    let decimalDiscount: number = this.product.discountPercentage;

    decimalDiscount = decimalDiscount * 0.01;

    let discount: number = this.product.price * decimalDiscount;

    let productDisconted: number = this.product.price - discount;

    return productDisconted;
  }

  transform(value: number, digits: number): string {
    if (isNaN(value) || isNaN(digits) || digits <= 0) {
      return value.toString();
    }

    const factor = Math.pow(10, digits);
    const roundedValue = Math.round(value * factor) / factor;

    return roundedValue.toFixed(digits);
  }

  buttonAddShopping() {
    this.shared.addProduct(this.product);

    alert('Iten Added to your shopping cart!');
  }
}
