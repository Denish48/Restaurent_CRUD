import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteService } from './services/auth-route.service';

// import {Router} from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements  OnInit,OnDestroy {

  constructor( private currpath:Router,private authservice:AuthRouteService){ if(localStorage.getItem('email_data' && 'password'))
  {
    this.ifuserlogin=true;
    this.ifuserlogin_lg_btn=false;
  }
  else{
    this.ifuserlogin=false;
  } }
  title = 'restorent-details';
  ifuserlogin=false;
  ifuserlogin_lg_btn=true;
  ngOnInit()
  {
   console.log( this.currpath.url)
  
  }
  
 
  ngOnDestroy() {
    
   
  }


}
