import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public authService: AuthService) {
  }

  incorrectLogIn = false;

  isDisabled(loginForm: NgForm): undefined {
    return undefined;
  }

  onLogin(loginForm: NgForm) {
    this.incorrectLogIn = false;
    loginForm.form.markAllAsTouched();
    if (loginForm.invalid) {
      return;
    }

    this.authService.onLogin(loginForm);
    setTimeout(() => {
      this.incorrectLogIn = this.authService.invalidLogin;
    }, 250);
  }

}
