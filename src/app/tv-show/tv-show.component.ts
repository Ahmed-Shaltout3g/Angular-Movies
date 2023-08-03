import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent {
constructor(private _MoviesService:MoviesService){}
imgprefix:string ='https://image.tmdb.org/t/p/w500/';
  tvlist:any[]=[];
  pages:number[]=[];
  term:string='';
ngOnInit()
{
  this.pages =new Array(10).fill(0).map((x,i)=>i+1);

  this._MoviesService.getTv(1).subscribe
  ({
    next:(response)=>
    {
      this.tvlist =response.results;
      console.log(this.tvlist)
    }
  })
}
testPage(page:number)
  {

      this._MoviesService.getTv(page).subscribe(
        {
          next:(response)=>
          {

            this.tvlist = response.results;
          }
        }
      )
    }
}
