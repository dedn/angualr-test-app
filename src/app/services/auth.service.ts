import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {st} from "@angular/core/src/render3";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth_url: string = environment.auth_url;
  private _token: string;

  constructor(
      private http: HttpClient
  ) { }


 public get isAuth() {
    return this._token || localStorage.getItem('token')
  }

  private set token(token) {
    this._token = token;
    localStorage.setItem('token', token)
  }


  login(email: string, password: string): Observable<boolean> {
    return this.http.post(`${this.auth_url}/login`, {email, password}, {responseType: 'text' }).pipe(
    map((res:string):boolean => {
    console.log(res)
      this.token = res
      return true
    })
    )
  }
}
