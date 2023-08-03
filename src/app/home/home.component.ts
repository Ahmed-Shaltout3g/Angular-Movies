import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
declare var $: any;
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private _MoviesService:MoviesService){}
    trendingMovies:any[] =[];
    trendingTv:any[] =[];
    trendingPeople:any[] =[];
    imgprefix:string ='https://image.tmdb.org/t/p/w500/';


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



    this._MoviesService.getTrinding('movie').subscribe({
      next:(response)=>
      {
        this.trendingMovies =response.results.slice(0,10);

      }
    })
    this._MoviesService.getTrinding('tv').subscribe({
      next:(response)=>
      {
        this.trendingTv =response.results.slice(0,10)
      }
    })
    this._MoviesService.getTrinding('person').subscribe({
      next:(response)=>
      {
        for(let i =0 ; i <response.results.length; i++)
          {
            if(response.results[i].profile_path == null)
        {
          response.results[i].profile_path ="../../assets/aa (1).jpg";
        }
        else
        {
          response.results[i].profile_path = this.imgprefix+response.results[i].profile_path
        }
        this.trendingPeople =response.results.slice(0,10)

          }
      }
    })



  }


}
