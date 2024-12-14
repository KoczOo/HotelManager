import {Injectable} from '@angular/core';
import {RestService} from "../rest/rest.service";
import {DaneLogowania} from "../../dto/auth/dane-logowania";
import {NgForm} from "@angular/forms";
import {catchError} from "rxjs";
import {StorageHelperService} from "../../helpers/storage-helper.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthTokenService} from "./auth-token.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {MessageServiceService} from "../message-service/message-service.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private router: Router,
        private restService: RestService,
        private storageHelper: StorageHelperService,
        private authTokenService: AuthTokenService,
        private messageService: MessageServiceService,
        ) {}

    helper = new JwtHelperService();
    invalidLogin = false;
    daneLogowania: DaneLogowania | undefined;

    onLogin(form: NgForm) {
        this.invalidLogin = false;
        this.daneLogowania = new DaneLogowania(
            form.value["username"],
            form.value["password"],
        );
        this.restService.post("api/auth/login", this.daneLogowania)
            .pipe(
                catchError(async (error: any) => {
                    this.invalidLogin = true;
                    this.messageService.showMessageError(error.error.message);
                    throw error;
                }),
            )
            .subscribe((response) => {
                if (response) {
                    this.invalidLogin = false;
                    const decodedToken = this.decodeToken(response.token);
                    this.authTokenService.setLogggedUser(decodedToken.sub);
                    this.authTokenService.setToken(response.token);
                    this.authTokenService.setTimesToTimer();
                    this.router.navigate(["/rooms"]);
                }
            });
    }

    private decodeToken(token: string) {
        return this.helper.decodeToken(token);
    }

    login(daneLogowania: any) {
        return this.restService.post("login", daneLogowania);
    }

  onLogout() {
    this.authTokenService.removeToken();
    window.location.reload();
  }
}
