import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISignIn, SignIn } from 'src/app/models/signin.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signInData: ISignIn = new SignIn();

  constructor(private router: Router) {
    // initial state
    console.log("constructor" , this.signInData)
  }

  ngOnInit(): void {
  }

  login(){
    if(this.signInData.login === 'admin' && this.signInData.password === 'admin'){
      if(this.signInData.rememberMe){
        localStorage.setItem('user',this.signInData.login )
      }
      this.router.navigate(['/account']);
    }else {
      alert("Login or password incorrect")
    }
  }

}
