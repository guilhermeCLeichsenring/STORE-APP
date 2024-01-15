import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { ProductModel } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'store-app';
  showFiller = false;
  showMenuButton = true;
  search: string = '';
  productsTotal: string = '';

  isAuth: boolean = false;

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.getUsername().subscribe((retorno) => {
      if (retorno) {
        this.isAuth = true;
      }
    });
  }

  // Cart

  getTotalProductsInCart() {
    this.shared.getProductToCart().subscribe((result: ProductModel[]) => {
      var lenght = result.length;

      if (lenght != 0) {
        this.productsTotal = lenght.toString();
      }
    });
  }
}
