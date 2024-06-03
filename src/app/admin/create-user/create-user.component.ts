import { Component, ViewChild, inject } from '@angular/core';
import { UserService } from '../user-service.service';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userService = inject(UserService);
  @ViewChild('newUserForm') newUserForm!: NgForm;
  userRoles: string[] = ["admin", "salesperson", "operater", "reporter"];

  onFormSubmit()
  {
    console.log(this.newUserForm.value);

    this.userService.postNewUser({
      fullName: this.newUserForm.value.fullName!,
      role: this.newUserForm.value.role!,
      password: this.newUserForm.value.password!,
    }).then((response) => {
      console.log(response);
    })
  }
}
