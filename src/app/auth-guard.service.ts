// import {
//     CanActivate,
//     ActivatedRouteSnapshot,
//     RouterStateSnapshot,
//     Router,
//     CanActivateChild
//   } from '@angular/router';
 
//   import { Injectable } from '@angular/core';
//   import { AuthService } from './auth.service';
//   import { Observable } from 'rxjs';
  
//   @Injectable()
//   export class AuthGuard implements CanActivate, CanActivateChild {
//     constructor(private authService: AuthService, private router: Router) {}
  
//     authenticated: boolean | undefined
//     canActivate(route: ActivatedRouteSnapshot,
//                 state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//       return this.authService.isAuthenticated()
//     {
//             if (this.authenticated) {
//               return true;
//             } else {
//               this.router.navigate(['/']);
//             }
//           }
    
//     }
  
//     canActivateChild(route: ActivatedRouteSnapshot,
//                      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//       return this.canActivate(route, state);
//     }
//   }

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | undefined> | Promise<boolean |undefined> | boolean | undefined{
   return this.authService.isAuthenticated()
      .then(
        (authenticated:boolean | undefined) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

  