import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  //Get
  getById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.url}/users/${id}`);
  }

  //GetAll
  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.url}/users`);
  }

  //Post
  addUser(newUser: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}/users`, newUser); // newUser é o Body
  }

  //Delete
  deleteUser(id: number): Observable<UserModel> {
    return this.http.delete<UserModel>(`${this.url}/users/${id}`);
  }

  //Put
  updateUser(id: number, updateUser: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.url}/users/${id}`, updateUser);
  }
}
