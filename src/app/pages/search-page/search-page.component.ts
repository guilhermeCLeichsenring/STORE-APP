import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductTotalList } from 'src/app/models/product-total-list.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  errorMessage: string = '';
  products: ProductModel[] = [];
  totalFunded: number = 0;
  search: string = '';

  constructor(
    private productService: ProductService,
    private shared: SharedService
  ) {
    this.shared.getNavSearch().subscribe((result: string) => {
      this.search = result;

      this.loadAllProductsBySearch(this.search);
    });
  }

  ngOnInit(): void {
    //this.loadAllProductsBySearch(this.search);
  }

  loadAllProductsBySearch(search: string) {
    this.errorMessage = '';
    this.productService
      .getTotalListSearch(search)
      .subscribe((result: ProductTotalList) => {
        this.products = result.products;
        this.totalFunded = result.total;
        if (this.products.length === 0) {
          this.errorMessage = 'Product not funded!';
        }
      });
  }
}
