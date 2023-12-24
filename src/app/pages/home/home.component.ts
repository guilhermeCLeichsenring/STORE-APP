import { Component, OnInit } from '@angular/core';
import { ProductTotalList } from 'src/app/models/product-total-list.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  femaleProducts: ProductModel[] = [];

  maleProducts: ProductModel[] = [];

  allProducts: any[] = [];

  promotionProducts: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadAllPromotionProducts();
    this.loadMensProducts('mens-shirts');
    this.loadWomensProducts('womens-dresses');
  }

  loadMensProducts(category: string) {
    this.productService
      .getTotalListCategory(category)
      .subscribe((result: ProductTotalList) => {
        this.maleProducts = result.products;
      });
  }
  loadWomensProducts(category: string) {
    this.productService
      .getTotalListCategory(category)
      .subscribe((result: ProductTotalList) => {
        this.femaleProducts = result.products;
      });
  }

  loadAllPromotionProducts() {
    this.productService
      .getTotalListAll()
      .subscribe((result: ProductTotalList) => {
        this.allProducts = result.products;
        for (let product of this.allProducts) {
          if (product.discountPercentage >= 10) {
            this.promotionProducts.push(product);
          }
        }

        console.log('Promotion' + this.promotionProducts);
      });

    console.log();
    this.promotionProducts = Array.from(this.promotionProducts);
  }
}
