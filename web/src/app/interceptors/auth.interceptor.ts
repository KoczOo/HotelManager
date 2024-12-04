import { Injectable } from "@angular/core";
import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Router } from "@angular/router";
import {AuthTokenService} from "../services/auth/auth-token.service";
import {AuthService} from "../services/auth/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(
		private authTokenService: AuthTokenService,
		private authService: AuthService,
		private router: Router,
	) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		const authToken = this.authTokenService.getToken();
		if (authToken && authToken !== "") {
			req = req.clone({
				setHeaders: {
					Authorization: `Bearer ${authToken}`,
				},
			});
		}
		return next.handle(req).pipe(
			catchError((error: HttpErrorResponse) => {
				if (error.status === 403) {
					//this.authService.onLogout();
					//this.router.navigate(["/login"]);
				}

				return throwError(() => error);
			}),
		);
	}
}
