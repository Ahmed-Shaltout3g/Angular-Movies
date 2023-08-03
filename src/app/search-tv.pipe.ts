import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(trendingTv:any[] ,term:string): any[] {
    return trendingTv.filter((movie)=>movie.name.toLowerCase().includes(term.toLowerCase()));
  }



}
