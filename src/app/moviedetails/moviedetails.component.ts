import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute

MoviesComponent
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {


  movDetails:any;
  movieId:string = '';
  imgprefix:string ='https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute){}
  ngOnInit()
  {

    this.movieId =this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMovieDetails(this.movieId).subscribe({
      next:(response)=>
      {
        this.movDetails =response;
      }
    })



  }
}
