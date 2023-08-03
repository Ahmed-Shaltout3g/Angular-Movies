import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  name = 'Jquery Integration With Angular!';
  isJqueryWorking: any;
  ngOnInit()
  {
    $(window).scroll(function()
    {
        let offset = $('router-outlet').offset().top;
        let wscrrol = $(window).scrollTop()

        if (wscrrol > offset)
        {

            $('.fix-dnt').fadeIn(1000)

        }
        else{

            $('.fix-dnt').fadeOut(1000)


        }
    })

    $('.fix-dnt').click(function () {
      $("body,html").animate({scrollTop :0} , 1000)


  });


  }
}
