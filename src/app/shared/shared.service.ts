import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  _username: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  // Criação do método verificador de autenticação
  isAuthenticated(): boolean {
    let user = this._username.getValue();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  public setUsername(username: string) {
    this._username.next(username);
  }

  public getUsername() {
    return this._username.asObservable();
  }
}
