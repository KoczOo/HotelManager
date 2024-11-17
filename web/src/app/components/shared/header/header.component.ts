import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {AuthTokenService} from "../../../services/auth/auth-token.service";
import {StorageHelperService} from "../../../helpers/storage-helper.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  lightMode = true;
  menuElement: [] = [];
  childrenElements: number = 0;
  falseSubmenuCreated: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthService,
    public authServiceToken: AuthTokenService,
    private storageHelper: StorageHelperService,
  ) {
  }

  ngOnInit() {
    if (this.authServiceToken.isLoggedIn()) {
    }
  }

  logoutUser() {
    this.authService.onLogout();
  }

  checkExactPath(path: string) {
    return this.router.url === path;
  }
}
