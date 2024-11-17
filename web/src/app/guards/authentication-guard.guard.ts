import {CanActivateFn, Router} from '@angular/router';
import {AuthTokenService} from "../services/auth/auth-token.service";
import {inject} from "@angular/core";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const auth: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const mainPage = router.parseUrl("");
  const login = router.parseUrl("login");

  if (auth.isLoggedIn()) {
    if (route.routeConfig?.path === "login") {
      return mainPage;
    } else {
      return true;
    }
  } else {
    if (route.routeConfig?.path === "login") {
      return true;
    } else {
      return login;
    }
  }
};
