import { Component } from '@angular/core';
import { Movie } from '../../classes/movie'
import{ MovieService } from '../../services/movie.service'

@Component({
  selector: 'my-movie-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {
  searchString : String;
  movies: Movie[];

  constructor(private movieService:MovieService){
  }

  searchMovie(){
    this.movieService.searchMovie(this.searchString)
    .subscribe(dat =>this.movies=dat.results);
  }

}
