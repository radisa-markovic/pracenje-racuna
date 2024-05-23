import { Component, inject } from '@angular/core';
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
export class UserListComponent {
  users: User[] = [];
  userService = inject(UserService);

  constructor()
  {
    this.userService.getUsers().then((users: User[]) => {
      this.users = users;
    });
  }
}
