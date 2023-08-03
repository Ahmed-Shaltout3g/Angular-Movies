import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { AboutComponent } from './about/about.component';
AuthGuard
const routes: Routes = [
  {path : '' , redirectTo:'login' , pathMatch:'full',title:'Login'},
  {path : 'home' ,canActivate:[AuthGuard],component:HomeComponent,title:'Home page'},
  {path : 'login' ,component:LoginComponent ,title:'Login'},
  {path : 'movies' ,canActivate:[AuthGuard],component:MoviesComponent,title:'Movies page'},
  {path : 'people' ,canActivate:[AuthGuard],component:PeopleComponent,title:'People page'},
  {path : 'about' ,canActivate:[AuthGuard],component:AboutComponent,title:'About page'},

  {path : 'moviedetails/:id' ,canActivate:[AuthGuard],component:MoviedetailsComponent,title:'Movies details'},
  {path : 'register' ,component:RegisterComponent,title:'Register page'},
  {path : 'tvDetails/:TvId' ,canActivate:[AuthGuard],component:TvDetailsComponent,title:'Tv details'},
  {path : 'peopledetails/:id' ,canActivate:[AuthGuard],component:PeopledetailsComponent,title:'Peopel details'},

  {path : 'tvShow' ,canActivate:[AuthGuard],component:TvShowComponent,title:'TV page'},
  {path : '**' ,component:NotfoundComponent,title:'Not found '},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
