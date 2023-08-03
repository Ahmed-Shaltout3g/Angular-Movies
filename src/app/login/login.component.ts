import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _router:Router){}
  errorMassage:string='';
  isLoading:boolean=false;
  loginForm:FormGroup = new  FormGroup({
    email :new FormControl (null,[Validators.email,Validators.required]),
    password : new FormControl(null, [Validators.pattern('([a-zA-Z]|[0-9]){8,}'),Validators.required])
  });



logIn(loginForm:FormGroup):void {
  this.isLoading = true;

  if(loginForm.valid)
  {
    this._AuthService.signin(loginForm.value).subscribe({
      next:(resopnse) =>
      {

        if(resopnse.message == 'success')
        {

          this._router.navigate(['/home']);
          localStorage.setItem('userData',resopnse.token);
          this.isLoading = false;
          this._AuthService.saveUserData();



        }},
        error :(responseError) =>
        {


          this.errorMassage =responseError.error.message;
          this.isLoading = false;

        }
    })
  }
}
}


