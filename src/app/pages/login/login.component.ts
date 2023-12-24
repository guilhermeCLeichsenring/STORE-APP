import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  mensagemLogin: string = '';

  constructor(private router: Router, private shared: SharedService) {}

  public btnLogin() {
    if (this.usuario == 'admin' || this.senha == 'admin') {
      this.mensagemLogin = 'Entrada autoriazada!';
      this.shared.setUsername(this.usuario);
      this.router.navigate(['home']);
    } else {
      this.mensagemLogin = 'Usuário e/ou senha errados!';
    }
  }

  hide = true;
}
