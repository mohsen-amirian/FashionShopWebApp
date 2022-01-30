import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormGroup = new FormGroup({
      emailControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('', [Validators.required])
    });

  showLoading: boolean = false;
  constructor(private authService: AuthenticationService, private router: Router) {}

  get email() {
    return  this.loginFormGroup.controls['emailControl'];
  }

  get password() {
    return  this.loginFormGroup.controls['passwordControl'];
  }

  getEmailError() {
    if (this.email.hasError('required')) {
      return 'Email is required!';
    } else if (this.email.hasError('email')) {
      return 'Email is in wrong format.'
    } else {
      return '';
    }
  }

  getPasswordError() {
    return this.password.valid ? '' : 'Password is required!';
  }

  onLoginClick(): void {
    if (this.loginFormGroup.valid) {
      this.showLoading = true;
      this.authService.login(this.email.value, this.password.value).then(
        () => {
          this.showLoading = false;
          this.router.navigate(['users']);
        },
        () => {
          console.log('cannot login');
          this.showLoading = false;
        }
      );
    }
  }


  onCancelClick(): void {

  }
}
