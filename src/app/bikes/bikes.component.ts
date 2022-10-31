import { Component, OnInit } from '@angular/core';
import { BikesService } from './bikes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  private bikes?: {id: number, name: string, status: string}[] ;

  constructor(private bikesService: BikesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.bikes = this.bikesService.getBikes()!;
  }

  onReload(){}
  }

