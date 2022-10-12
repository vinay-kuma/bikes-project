import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BikesService } from '../bikes.service';

interface Bike {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class BikeResolver implements Resolve<Bike> {
  constructor(private bikesService: BikesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bike> |
   Promise<Bike> | Bike {
    return this.bikesService.getBike(+route.params['id']);
  }
}