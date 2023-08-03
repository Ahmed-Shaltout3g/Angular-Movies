import { Component } from '@angular/core';
declare var $: any;
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    autoplay:true,
    autoplayTimeout:2000,
    // animateOut: 'fadeOut',
    pullDrag: false,
    dots: false,
    navSpeed: 2000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        nav:true

      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit()
  {

  }
}
