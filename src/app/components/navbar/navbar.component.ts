import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

// Implement o OnInit
export class NavbarComponent implements OnInit {
  userName: string = '';
  search: string = '';
  categories: string[] = [];

  isAuth: boolean = false;

  constructor(
    private shared: SharedService,
    private router: Router,
    private productService: ProductService
  ) {
    this.shared.getUsername().subscribe((retorno: string) => {
      this.userName = retorno;
    });
  }

  // Método para mudar o valor do isAuth assim que o user name  recebe o valor
  ngOnInit(): void {
    this.loadAllCategories();
    this.shared.getUsername().subscribe((retorno: string) => {
      if (retorno) {
        this.isAuth = true;
      }
    });
  }

  //Search Function
  searchFunction() {
    this.shared.setNavSearch(this.search);

    this.router.navigate(['search-page']);
  }

  // Categories

  categoryFunction(category: string) {
    this.shared.setNavCategory(category);

    this.router.navigate(['category-page']);
  }

  loadAllCategories() {
    this.productService.getCategories().subscribe((result: string[]) => {
      this.categories = result;
    });

    this.categories = Array.from(this.categories);
  }
}
