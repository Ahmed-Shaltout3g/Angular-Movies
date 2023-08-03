import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpeople'
})
export class SearchpeoplePipe implements PipeTransform {

  transform(trendingTv:any[] ,term:string): any[] {
    return trendingTv.filter((movie)=>movie.name.toLowerCase().includes(term.toLowerCase()));
  }

}
