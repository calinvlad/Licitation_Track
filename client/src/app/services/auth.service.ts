import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server = 'http://localhost:8000'

  constructor(
    private http: HttpClient
  ) { }


  register(data) {
    return this.http.post(`${this.server}/auth/register`, data)
  }

  login(data) {
    return this.http.post(`${this.server}/auth/login`, data)
  }


}
