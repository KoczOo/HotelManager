import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {AuthTokenService} from "../../../services/auth/auth-token.service";
import {StorageHelperService} from "../../../helpers/storage-helper.service";

class MenuElement {
  header: string;
  url?: string;
  isActiveElement?: () => boolean;
  exact: boolean;
  exist: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuElement: MenuElement[] = [];

  constructor(
    private router: Router,
    public authService: AuthService,
    public authServiceToken: AuthTokenService,
    private storageHelper: StorageHelperService,
  ) {
  }

  ngOnInit() {
    if (this.authServiceToken.isLoggedIn()) {
      this.createMenu();
    }
  }

  logoutUser() {
    this.authService.onLogout();
  }
  createMenu() {
    this.menuElement = [
      {
        header: "POKOJE",
        exist: true,
        exact: true,
        url: "/rooms",
      },
      {
        header: "REZERWACJE",
        exist: true,
        exact: true,
        url: "/reservations",
      }
      ]
  }
  getLoggedUser() {
    return this.authServiceToken.getLoogedUser();
  }
}
