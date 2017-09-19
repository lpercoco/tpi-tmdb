import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class MovieService {

  private api_key = 'api_key=5a1e00313c18a1e00d243cfeb412c79d';
  private page='&page=1'
  private lenguage='&language=es'
  private search_movie='search/movie?';
  private movie='movie/';
  private api_url='https://api.themoviedb.org/3/';
  private reviews='/reviews?'
  private adult='&include_adult=false'
  private query='&query=';

  constructor(private http: Http) {
  }

   searchMovie(queryString){
    var request=this.api_url+this.search_movie+this.api_key+this.lenguage+this.query+queryString+this.page+this.adult;

    return this.http.get(request)
    .map( res => res.json())
  }

  getReviews(id){
    var request=this.api_url+this.movie+id+this.reviews+this.api_key+this.lenguage;

    return this.http.get(request)
    .map(res => res.json())
  }

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  getMovie(id){
    var request= this.api_url+this.movie+id+'?'+this.api_key+this.lenguage;

    return this.http.get(request)
    .map(res => res.json())
  }

}
