import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService) {}
  canActivate(next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn()) {
        return true;
      }

      window.alert('You don\'t have permission to view this page');
      return false;
  }
}
