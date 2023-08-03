import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _router:Router){}
  errorMassage:string='';
  isLoading:boolean=false;
  err:boolean = false;
  registerForm:FormGroup = new  FormGroup({

    name : new FormControl(null, [Validators.minLength(2) , Validators.maxLength(50) , Validators.required]),
    // last_name :new FormControl (null,[Validators.minLength(2),Validators.maxLength(50),Validators.required]),
    // age :new FormControl (null,[Validators.min(10),Validators.max(80),Validators.required]),
    password : new FormControl(null, [Validators.pattern('([a-zA-Z]|[0-9]){8,}'),Validators.required]),
    rePassword : new FormControl(null, [Validators.pattern('([a-zA-Z]|[0-9]){8,}'),Validators.required]),
    email :new FormControl (null,[Validators.email,Validators.required]),
    phone: new FormControl(null , [Validators.required  , Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, { validators: this.rePassword } );
  rePassword(registerForm:any){
    let passwordControl = registerForm.get('password')
    let rePasswordControl = registerForm.get('rePassword')
    if (passwordControl?.value == rePasswordControl?.value) {
      return null
    }else{
      rePasswordControl?.setErrors({passwordMatch : 'rePassword must Matched'})
      return {passwordMatch : 'rePassword must Matched'}
    }
  }


submitRegister(registerform:FormGroup):void {
  this.isLoading = true;

  if(registerform.valid)
  {
    this._AuthService.signup(registerform.value).subscribe({
      next:(resopnse) =>
      {

        if(resopnse.message == 'success')
        {

          this._router.navigate(['/login'])
          this.isLoading = false;


        }},
        error: (responseError)=>{

            this.err = true
            this.errorMassage = responseError.error.message
          this.isLoading = false
        }






    })



  }

}
}
