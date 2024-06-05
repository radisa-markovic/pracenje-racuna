import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../user-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = false;
  error: any = null;
  isAscending: boolean = true;
  selectedRole: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.error = null;
    this.userService.getUsers(this.isAscending, this.selectedRole).subscribe({
      next: (users) => {
        this.isLoading = false;
        this.users = users;
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error;
        console.error(error);
      },
    }
    );    
  }

  getUsers()
  {
    this.userService.getUsers(this.isAscending, this.selectedRole).subscribe({
      next: (users) => {
        this.isLoading = false;
        this.users = users;
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error;
        console.error(error);
      },
    }
    );
  }

  onNameSortChange($event: Event)
  {
    const value = (<HTMLInputElement>$event.target).value;
    console.log(value);
    if(value === "nameAscending")
      this.isAscending = true;
    else
      this.isAscending = false;

    this.getUsers()
  }

  onRoleChange($event: Event)
  {
    this.selectedRole = (<HTMLSelectElement>$event.target).value;
    this.getUsers();
  }
}
