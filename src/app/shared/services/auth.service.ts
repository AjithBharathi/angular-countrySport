import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(email, password){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.key}`, 
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
  signupUser(email, password){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.key}`, 
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
