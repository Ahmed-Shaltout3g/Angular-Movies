import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor (private _AuthService:AuthService){}
  userData:any =this._AuthService.saveUserData()
signOut()
{
  this._AuthService.logOut();
}
  isLogin:boolean = false;
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


    // let wScroll =$(window).offset().top

    // let nav =$('.navbar').offset().top
    // if(wScroll > nav-50)
    // {
    //   $('.navbar').css('backgroundColor','red')
    // }

    $(function () {
      $(window).scroll(function () {
        let $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(window).scrollTop() > $nav.height());
      });
    });






  }



  change()
  {

        let $nav = $(".navbar-fixed-top");
        $nav.addClass('change');



  }

  // $(()=>{
  //   $(window).scroll(function()
  //   {
  //       let offset = $('.navbar').offset().top;
  //       let wscrrol = $(window).scrollTop()
  //       if (wscrrol > offset-50)
  //       {
  //           $('.navbar').addClass('bg-danger');
  //           $('.navbar').css('padding' ,'0px 50px');


  //       }
  //       else{
  //           $('.navbar').removeClass('bg-danger');
  //           $('.navbar').css('padding' ,'0px 0px');




  //       }
  //  } })



}
