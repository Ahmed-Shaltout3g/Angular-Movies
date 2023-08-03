import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient : HttpClient) { }


  getTrinding(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=0038e84a95103de713f1f6fa0401fac8`)
  }
  getMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0038e84a95103de713f1f6fa0401fac8`)
  }
  getMovies(pages:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/4/discover/movie?api_key=0038e84a95103de713f1f6fa0401fac8&page=${pages}`)

  }
  getTvDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0038e84a95103de713f1f6fa0401fac8`)

  }
  getTv(pages:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/4/discover/tv?api_key=0038e84a95103de713f1f6fa0401fac8&page=${pages}`)

  }

  getPeopleDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=0038e84a95103de713f1f6fa0401fac8`)

  }


  getpeople(pages:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/4/discover/person?api_key=0038e84a95103de713f1f6fa0401fac8&page=${pages}`)

  }
}
