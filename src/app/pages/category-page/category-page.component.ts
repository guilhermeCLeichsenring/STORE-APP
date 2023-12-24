import { Component } from '@angular/core';
import { ProductTotalList } from 'src/app/models/product-total-list.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent {
  products: ProductModel[] = [];
  totalFunded: number = 0;

  constructor(
    private productService: ProductService,
    private shared: SharedService
  ) {
    this.shared.getNavCategory().subscribe((result: string) => {
      this.loadAllProductsByCategory(result);
    });
  }

  loadAllProductsByCategory(category: string) {
    this.productService
      .getTotalListCategory(category)
      .subscribe((result: ProductTotalList) => {
        this.products = result.products;
        this.totalFunded = result.total;
      });

    this.products = Array.from(this.products);
  }
}
