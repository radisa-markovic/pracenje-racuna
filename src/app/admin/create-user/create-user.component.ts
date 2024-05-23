import { Component, inject } from '@angular/core';
import { UserService } from '../user-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userService = inject(UserService);
  newUserForm = new FormGroup({
    fullName: new FormControl(""),
    username: new FormControl(""),
    role: new FormControl("admin"),
    password: new FormControl("")
  });

  addNewUser()
  {
    this.userService.postNewUser({
      fullName: this.newUserForm.value.fullName!,
      role: this.newUserForm.value.role!,
      password: this.newUserForm.value.password!,
    })
  }
}
