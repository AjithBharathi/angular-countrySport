import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let user:any = JSON.parse(localStorage.getItem('AUTH_USER'));
   
    const authRequest = req.clone({
      params: new HttpParams().set('auth', user.idToken)
    })
    return next.handle(authRequest)

  }
}
