import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import moment from "moment/moment";
import { BehaviorSubject } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { StorageHelperService } from "../../../../../../../politechnika/hotel_manager/web/src/app/helpers/storage-helper.service";
import {MessageServiceService} from "../message-service/message-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
	private tokenExpirationSubject = new BehaviorSubject<number | null>(null);
	helper = new JwtHelperService();

	checkInterval: number = 1000; // 1sekunda - w milisekundach
	warningTimeBeforeEndSession: number = 60; // 60 sekund

	//czas po jakim mozemy zaczac odswiezac sesje
	AFTER_ONE_MINUTE = 1140; // 19 minut
	AFTER_ONE_DAY = 518400; // 6 dni
	TIME_TO_REFRESH_SESSION = this.AFTER_ONE_MINUTE;

	constructor(
		private cookieService: CookieService,
		private messagerService: MessageServiceService,
		private storageHelper: StorageHelperService,
	) {
		this.setTimesToTimer();
	}

	isLoggedIn(): boolean {
		return this.cookieService.check("token");
	}

	removeToken() {
		this.cookieService.delete("token");
	}

	getToken() {
		return this.cookieService.get("token");
	}

	setToken(token: string) {
		this.cookieService.set("token", token);
	}

	getIdSesja() {
		return this.cookieService.get("idSesja");
	}

	returnTokenValidTime(): number {
		const expirationTime = this.getTokenExpiratoin();
		return moment.unix(expirationTime).diff(moment()) / 1000;
	}

	setTokenExpiration(expirationTime: number): void {
		this.tokenExpirationSubject.next(expirationTime);
	}

	getTokenExpiratoin(): number {
		return this.tokenExpirationSubject.value!;
	}

	setTimesToTimer() {
		const czyZapamietajMnie = this.storageHelper.getItem("czyZapamietajMnie");
		if (czyZapamietajMnie && czyZapamietajMnie === "true") {
			this.TIME_TO_REFRESH_SESSION = this.AFTER_ONE_DAY;
		} else {
			this.TIME_TO_REFRESH_SESSION = this.AFTER_ONE_MINUTE;
		}
	}

	private decodeToken(token: string) {
		return this.helper.decodeToken(token);
	}
}
