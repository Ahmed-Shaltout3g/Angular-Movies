import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject } from 'rxjs';
Observable
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userData'))
    {
      this.saveUserData();
    }
  }

  userData=new BehaviorSubject(null);
  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/'
  signup(formData:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}auth/signup`,formData)
  }
  signin(formData:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}auth/signin`,formData)
  }
saveUserData()
{
  if(localStorage.getItem('userData'))
  {
    let encodeToken =JSON.stringify(localStorage.getItem('userData'));
    let decodeToken:any =jwtDecode(encodeToken);
    this.userData.next(decodeToken);
    return decodeToken;
  }
}

logOut()
{
  localStorage.removeItem('userData');
  this.userData.next(null);
  this._Router.navigate(['/login']);
}


}
