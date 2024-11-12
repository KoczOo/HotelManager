import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

const headerDict = {
    "Content-Type": "application/json",
};

const requestOptions = {
    headers: new HttpHeaders(headerDict),
};

@Injectable({
    providedIn: 'root'
})
export class RestService {
    private readonly API_URL = environment.apiUrl;

    constructor(private httpClient: HttpClient) {
    }

    get(url: string): Observable<any> {
        return this.httpClient.get(this.API_URL + url, requestOptions);
    }

    post(url: string, body: any): Observable<any> {
        return this.httpClient.post(this.API_URL + url, body, requestOptions);
    }

    put(url: string, body: any): Observable<any> {
        return this.httpClient.put(this.API_URL + url, body, requestOptions);
    }

    delete(url: string): Observable<any> {
        return this.httpClient.delete(this.API_URL + url, requestOptions);
    }
}
