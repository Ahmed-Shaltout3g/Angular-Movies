import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute
@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.css']
})
export class PeopledetailsComponent {

  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute){}

  peopleList:any;
  imgprefix:string ='https://image.tmdb.org/t/p/w500/';
  personId:string='';
  id:string='';
  nameKnow:string[]=[];

  ngOnInit()
  {

    this.personId =this._ActivatedRoute.snapshot.params['id']
    this._MoviesService.getPeopleDetails(this.personId).subscribe
    ({
      next:(response) =>
      {
        this.peopleList =response;
          if(this.peopleList.profile_path == null)
            {
              this.peopleList.profile_path ="../../assets/aa (1).jpg";

            }
            else
            {
              this.peopleList.profile_path =this.imgprefix+this.peopleList.profile_path
            }

        this.nameKnow = response.also_known_as.slice(0,3);



      }})
    }
}
