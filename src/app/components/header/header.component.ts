import { Component } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  //prueba
  private prueba='hola';
  private prueba2;
  //cambiar nombre
  private requesttoken:{success:boolean,expires_at: string, request_token: string};

  constructor(private authenticationService:AuthenticationService){

  }

  login(){

    this.authenticationService.createRequestToken()
    .subscribe(res => {this.requesttoken=res;

      if(this.requesttoken.success){
        this.authenticationService.getUserValidation(this.requesttoken.request_token);

        this.authenticationService.createSessionId();

      }});

      //prueba
      this.prueba=this.requesttoken.request_token;

    }


  }
