
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

    this.route.params.subscribe(params => {
      this.movieId = +params['id'];


      this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.themoviedbService.getMovieById(id)
          .subscribe(data => {
            this.movie = data;
            this.genres = this.movie.genres;
            // console.log(this.movie);
          }, (err: any) => {
            if (err.status === 404) {
              this.toastr.error('No existe Película con ese ID', 'Error!');
              this.router.navigate(['/search']);
            }a
          });
  }

}
