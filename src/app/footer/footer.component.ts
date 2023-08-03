import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
constructor(private _AuthService:AuthService){}
  isLogin:boolean = false;

  userData:any =this._AuthService.saveUserData()
  ngOnInit(): void
  {
    this._AuthService.userData.subscribe({

      next: ()=>
      {
        if (this._AuthService.userData.getValue() != null)
        {
          this.isLogin =true;
        }
        else
        {
          this.isLogin =false;

        }


      }
    })

  }
}
