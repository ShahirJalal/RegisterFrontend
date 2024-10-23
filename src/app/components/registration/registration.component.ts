import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private registrationService: RegistrationService) {}

  // Function to register the user
  registerUser() {
    if (this.username && this.password) {
      this.registrationService.register(this.username, this.password).subscribe(
        (response: string) => {
          this.message = 'Registration successful: ' + response;
        },
        (error) => {
          this.message = 'Registration failed: ' + error.message;
        }
      );
    } else {
      this.message = 'Please fill in both fields.';
    }
  }
}