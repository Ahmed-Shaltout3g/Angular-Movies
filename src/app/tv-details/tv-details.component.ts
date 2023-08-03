import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent {
  constructor (private _MoviesService:MoviesService , private _ActivatedRoute:ActivatedRoute){}
  imgprefix:string ='https://image.tmdb.org/t/p/w500/';
  tvTrinding:any;
  tvId:string = '';

  ngOnInit()
  {
    this.tvId =this._ActivatedRoute.snapshot.params['TvId'];

    this._MoviesService.getTvDetails(this.tvId).subscribe
    ({
      next:(response)=>
      {
        this.tvTrinding =response;
      }
    })
  }
}
