import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  incorrectLogIn = false;

  isDisabled(loginForm: NgForm): undefined {
    return undefined;
  }

  onLogin(loginForm: NgForm) {

  }
}
