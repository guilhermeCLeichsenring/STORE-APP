import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private shared: SharedService, private router: Router) {}

  //Criando método para receber o método de autenticação do shared e atribuir na permissão as rotas

  public canActivate(): Observable<boolean> | boolean {
    let logged: boolean = this.shared.isAuthenticated();

    if (!logged) {
      this.router.navigate(['login']);
    }

    return logged;
  }
}
