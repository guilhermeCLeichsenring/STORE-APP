import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

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

  isAuth: boolean = false;

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.getUsername().subscribe((retorno) => {
      if (retorno) {
        this.isAuth = true;
      }
    });
  }
}
