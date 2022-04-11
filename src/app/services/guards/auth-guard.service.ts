import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthRouteService } from '../auth-route.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authservice: AuthRouteService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | any {
    let isLoggedin = this.authservice.isAuthenticated();

    if (isLoggedin) {
      return true;
    } 
    else {
      this.route.navigateByUrl('/');
    }
  }
  
}
