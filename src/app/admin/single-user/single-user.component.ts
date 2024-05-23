import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-single-user',
  standalone: true,
  imports: [],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss'
})
export class SingleUserComponent {
  userId: number | string = -1;
  user: Partial<User> = {
    fullName: "",
    username: ""
  };

  constructor(
    route: ActivatedRoute,
    userService: UserService
  ){
    this.userId = route.snapshot.paramMap.get("id")!;

    userService.getUser(this.userId).then((user: User[]) => {
      this.user = user[0];
    });
  }

  
}
