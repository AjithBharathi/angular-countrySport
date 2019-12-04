import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode:boolean = true;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  changeLoginMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onauthUser(user:NgForm){
    let authRes: Observable<any>;

    if(this.isLoginMode){
      authRes = this.authService.loginUser(user.value.email, user.value.password);
    }else{
      authRes = this.authService.signupUser(user.value.email, user.value.password);
    }

    authRes.subscribe(res => {
      console.log(res);
      localStorage.setItem('AUTH_USER', JSON.stringify(res));
      this.router.navigate(['country']);
    },
    err => {
      console.log('auth err', err);
    })
    
  }

  name = "ajith bharathi";

}
