import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  private api_key = '5a1e00313c18a1e00d243cfeb412c79d';
  private api_url_authentication='https://api.themoviedb.org/3/authentication/';
  private api_url_authenticate='https://www.themoviedb.org/authenticate/';
  private redirect_url='?redirect_to=http://localhost:4200/';
  private token_url='token/new?api_key=';
  private session_url='session/new?api_key=';

  constructor(private http: Http) {
  }
  //en orden de ejecucion

  // https://api.themoviedb.org/3/authentication/token/new?api_key=<<api_key>>
  createRequestToken(){
    var request=this.api_url_authentication+this.token_url+this.api_key;

    return this.http.get(request)
    .map( res => res.json());
  }

  //https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved
  getUserValidation(REQUEST_TOKEN : string){

    var request=this.api_url_authenticate+REQUEST_TOKEN+this.redirect_url;

    window.location.href=request;

  }

  // https://api.themoviedb.org/3/authentication/session/new?api_key=<<api_key>>
  createSessionId(){
    var request=this.api_url_authentication+this.session_url+this.api_key

    return this.http.get(request)
    .map( res => res.json());

  }

  storageRequestToken(REQUEST_TOKEN){
    localStorage.setItem('requestToken',REQUEST_TOKEN);
  }

}
