import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { SearchTvPipe } from './search-tv.pipe';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { SearchpeoplePipe } from './searchpeople.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvShowComponent,
    PeopleComponent,
    AboutComponent,
    LoginComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    MoviedetailsComponent,
    SearchPipe,
    TvDetailsComponent,
    SearchTvPipe,
    PeopledetailsComponent,
    SearchpeoplePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
