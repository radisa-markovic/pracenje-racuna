import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL: string = "http://localhost:3000/users";

  constructor() { }

  async getUsers()
  {
    const response = await fetch(this.userURL);
    return await response.json() ?? [];
  }

  async getUser(id: number | string)
  {
    const response = await fetch(`${this.userURL}/?id=${id}`);
    return await response.json();
  }

  async postNewUser(newUser: Partial<User>)
  {
    fetch(this.userURL, {
      method: "POST",
      body: JSON.stringify({
        fullName: newUser.fullName,
        username: newUser.username,
        role: newUser.role,
        password: newUser.password
      })
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }

  async updateUser(newUserData: Partial<User>)
  {
    fetch(`${this.userURL}/${newUserData.id}`, {
      method: "PUT",
      body: JSON.stringify(newUserData)
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }

  async deleteUser(userID: number | string)
  {
    fetch(`${this.userURL}/${userID}`, {
      method: "DELETE"
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }
}
