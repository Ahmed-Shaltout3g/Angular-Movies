import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  constructor(private _MoviesService:MoviesService){}
  term:string='';
  imgprefix:string ='https://image.tmdb.org/t/p/w500/';
  pages:number[]=[];
  peoplePagesList:any[]=[];
  ngOnInit()
  {
    this.pages =new Array(10).fill(0).map((x,i)=>i+1);

    this._MoviesService.getpeople(1).subscribe
    ({
      next:(responce)=>
      {
        this.peoplePagesList = responce.results
        console.log(this.peoplePagesList)
      }
    })
  }
  testPage(page:number)
  {

      this._MoviesService.getpeople(page).subscribe(
        {
          next:(response)=>
          {

            this.peoplePagesList = response.results;
          }
        }
      )
    }

}
