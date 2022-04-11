import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthRouteService {


  constructor() {}
  isLoggedIn = false;

  LogIn() {
    this.isLoggedIn = true;
  }

  LogOut() {
    this.isLoggedIn = false;
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }


}
