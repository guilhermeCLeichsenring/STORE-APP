import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  //instanciação do userAdd
  userAdd: UserModel = new UserModel();

  dataSource: UserModel[] = [];

  constructor(private userService: UserService) {}

  // Adicionando os objetos ao array
  ngOnInit(): void {
    this.loadUsers();
  }

  // Carregar os objetos do service
  loadUsers() {
    this.userService.getAll().subscribe((result: UserModel[]) => {
      console.log(result);
      this.dataSource = result;
    });
  }

  btnDelete(user: UserModel): void {
    //capturar o item
    let index = this.dataSource.findIndex((item) => {
      item == user;
    });

    //remover
    this.dataSource.splice(index, 1);

    //atualizar
    this.dataSource = Array.from(this.dataSource);
  }

  // buscar json
  btnSearch(user: UserModel): void {
    this.userService.getById(user.id).subscribe((result: UserModel) => {
      // método para converter o json em string
      let json = JSON.stringify(result);

      alert('Procura de usuário');
    });
  }

  //adicionar Usuário

  btnInsert() {
    if (this.userAdd.name && this.userAdd.email) {
      alert('usuário adicionado!!');

      //adicionar usuário
      this.dataSource.push(this.userAdd);

      //atualizar array
      this.dataSource = Array.from(this.dataSource);
    }
  }
}
