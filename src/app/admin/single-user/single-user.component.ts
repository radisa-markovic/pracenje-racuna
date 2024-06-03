import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../user-service.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-single-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss'
})
export class SingleUserComponent implements OnInit {
  @ViewChild('submitForm') submitForm!: NgForm;
  userId: number | string = -1;
  user: Partial<User> = {
    fullName: "",
    username: ""
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ){
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["id"];

    this.userService.getUser(this.userId).then((user: User[]) => {
      this.user = user[0];
    });
  }

  onSubmit()
  {
    console.log(this.submitForm.value);
  }

  onUserDelete()
  {
    this.userService.deleteUser(this.userId);
  }

  
}
