import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
 
  import { Injectable } from '@angular/core';
  import { AuthService } from './auth.service';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}
  
    authenticated: boolean | undefined 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated()
    {
            if (this.authenticated) {
              return true;
            } else {
              this.router.navigate(['/']);
            }
          }
    
    }
  
    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
    }
  }
  