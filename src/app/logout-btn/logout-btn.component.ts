import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { AuthRouteService } from '../services/auth-route.service';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css'],
})
export class LogoutBtnComponent implements OnInit  {
  constructor(
    private authrouteservice: AuthRouteService,
    private nevigaterouter: Router
    ) {}
    logout_btn_val:Boolean=false;
  

    ngOnInit(): void {
      let urlsubscription=this.nevigaterouter.url
      if(urlsubscription=="/")
      {

      }
     
    }
  
   
  
  USER_LOGOUT() {
    if (confirm('!Sure, You Want to Logout') == true) {
      localStorage.clear()
      sessionStorage.clear()
      this.authrouteservice.LogOut();
      this.nevigaterouter.navigateByUrl('/');
    }
   
  }
 
  
}
