import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../../models/login.model";
import { environment } from '../../environments/environment';

@Injectable()
export class SignInService {

    constructor(private http: HttpClient) { }

    token: string;

    login(email: string, password: string) {
        return this.http.post<Login>(environment.API_URL + "/login", {email, password});
    }
}  
