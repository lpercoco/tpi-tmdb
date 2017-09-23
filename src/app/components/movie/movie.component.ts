
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../../classes/movie'
import { MovieService } from '../../services/movie.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-movie',
  templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit {

  private selectedMovie: Movie;

  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute,
    private location: Location,

  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.movieService.getMovie(+params.get('id')))
    .subscribe(movie => this.selectedMovie = movie);

    //falta traer reviews

    
  }

}
