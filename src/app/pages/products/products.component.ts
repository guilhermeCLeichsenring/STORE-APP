import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { isEmpty } from 'rxjs';
import { ProductTotalList } from 'src/app/models/product-total-list.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  array: any[] = [1, 3, 5, 7, 2];
  products: ProductModel[] = [];
  categories: string[] = [];
  category: string = '';
  search: string = '';
  errorMessage: string = '';
  totalFunded: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadAllCategories();
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.errorMessage = '';
    this.productService
      .getTotalListAll()
      .subscribe((result: ProductTotalList) => {
        this.products = result.products;
      });

    this.products = Array.from(this.products);
  }

  loadAllProductsByCategory(category: string) {
    this.errorMessage = '';
    this.productService
      .getTotalListCategory(category)
      .subscribe((result: ProductTotalList) => {
        this.products = result.products;
      });

    this.products = Array.from(this.products);
  }

  loadAllProductsBySearch(search: string) {
    this.errorMessage = '';
    this.productService
      .getTotalListSearch(search)
      .subscribe((result: ProductTotalList) => {
        this.products = result.products;
        this.totalFunded = result.total;
        if (this.products.length === 0) {
          this.errorMessage = 'Product not found!';
        }
      });

    this.products = Array.from(this.products);
  }

  loadAllCategories() {
    this.productService.getCategories().subscribe((result: string[]) => {
      this.categories = result;
    });

    this.categories = Array.from(this.categories);
  }
}
