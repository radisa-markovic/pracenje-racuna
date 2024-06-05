import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getUsers(nameAscending: boolean, userRole: string): Observable<User[]>
  {
    let params = new HttpParams();
    if(nameAscending)
    {
      params = params.append("_sort", "fullName");      
    }
    else
    {
      params = params.append("_sort", "-fullName");
    }

    if(userRole !== "all")
    {
      params = params.append("role", userRole);      
    }

    return this.http.get<User[]>(this.userURL, {
        params: params
    });
  }

  async getUser(id: number | string)
  {
    const response = await fetch(`${this.userURL}/?id=${id}`);
    return await response.json();
  }

  postNewUser(newUser: Partial<User>): Observable<any>
  {
    return this.http.post(this.userURL, newUser);
  }

  async updateUser(newUserData: Partial<User>)
  {
    console.log(newUserData);
    fetch(`${this.userURL}/${newUserData.id}`, {
      method: "PATCH",
      body: JSON.stringify(newUserData)
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }

  async deleteUser(userID: number | string)
  {
    console.log(userID);
    fetch(`${this.userURL}/${userID}`, {
      method: "DELETE"
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }
}
