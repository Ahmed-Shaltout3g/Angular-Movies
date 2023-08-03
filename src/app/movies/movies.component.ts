import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private _MoviesService:MoviesService){}
  imgprefix:string ='https://image.tmdb.org/t/p/w500/';
  movielist:any[] =[];
  pages:number[]=[];
  term:string='';


  ngOnInit()
  {
    this.pages =new Array(10).fill(0).map((x,i)=>i+1);
    this._MoviesService.getMovies(1).subscribe(
      {
        next:(response)=>
        {

          this.movielist = response.results;
        }
      }
    )


  }
  testPage(page:number)
  {

      this._MoviesService.getMovies(page).subscribe(
        {
          next:(response)=>
          {

            this.movielist = response.results;
          }
        }
      )
    }




}

