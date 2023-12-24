import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

// Implement o OnInit
export class NavbarComponent implements OnInit {
  userName: string = '';

  // Criaçao da variável de valor do ngIf
  isAuth: boolean = false;

  constructor(private shared: SharedService) {
    this.shared.getUsername().subscribe((retorno: string) => {
      this.userName = retorno;
    });
  }

  // Método para mudar o valor do isAuth assim que o user name  recebe o valor
  ngOnInit(): void {
    this.shared.getUsername().subscribe((retorno: string) => {
      if (retorno) {
        this.isAuth = true;
      }
    });
  }
}
