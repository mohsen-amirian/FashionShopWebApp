import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  constructor(private authService: AuthenticationService) { }

  loginClicked() {
    if(this.isLoggedIn()) {
      this.authService.logout();
    } else {
      window.location.href = 'login';
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getWelcomeText(): string {
    let currentUser = this.authService.getCurrentUser();
    if(currentUser) {
      return `Hi ${currentUser.first_name}`;
    } else {
      return '';
    }
  }

}
