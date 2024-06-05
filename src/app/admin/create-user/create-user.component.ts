import { Component, ViewChild, inject } from '@angular/core';
import { UserService } from '../user-service.service';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userService = inject(UserService);
  @ViewChild('newUserForm', { static: false }) newUserForm!: NgForm;
  userRoles: string[] = ["admin", "salesperson", "operater", "reporter"];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onFormSubmit()
  {
    if(this.newUserForm.valid)
    {
      this.userService.postNewUser({
        fullName: this.newUserForm.value.fullName,
        username: this.newUserForm.value.username,
        role: this.newUserForm.value.role,
        password: this.newUserForm.value.password,
      }).subscribe({
        next: (value) => {
          console.log(value);
          this.newUserForm.reset();
          this.router.navigate(['/admin/users']);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }

  }
}
