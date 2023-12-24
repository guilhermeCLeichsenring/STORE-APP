import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() Product: any;

  constructor(private router: Router, private shared: SharedService) {}

  doDiscount(): number {
    let decimalDiscount: number = this.Product.discountPercentage;

    decimalDiscount = decimalDiscount * 0.01;

    let discount: number = this.Product.price * decimalDiscount;

    let productDisconted: number = this.Product.price - discount;

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

  linkToProduct() {
    this.router.navigate(['product']);
    this.shared.setProduct(this.Product.id);
  }
}
