import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BikesService } from '../bikes.service';
// import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-bike',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css']
})
export class EditBikeComponent implements OnInit {
  bike!: {id: number, name: string, status: string};
  bikeName = '';
  bikeStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private bikesService: BikesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    let bike = this.bikesService.getBike(id)
    this.bikeName = this.bike.name;
    this.bikeStatus = this.bike.status;
  }

  onUpdateBike() {
    this.bikesService.updateBike(this.bike.id, {name: this.bikeName, status: this.bikeStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
  //   if (!this.allowEdit) {
  //     return true;
  //   }
  //   if ((this.bikeName !== this.bike.name || this.bikeStatus !== this.bike.status) && !this.changesSaved) {
  //     return confirm('Do you want to discard the changes?');
  //   } else {
  //     return true;
  //   }
  // }
}