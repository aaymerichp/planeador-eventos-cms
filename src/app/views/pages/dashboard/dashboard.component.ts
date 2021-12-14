import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import {APICallerService} from '../../../services/apicaller.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  currentObj = null;
  message = '';
  services: any;
  products: any;
  providers: any;
  currentDate: NgbDateStruct;
  constructor(
      private apiCallerService: APICallerService,
      private calendar: NgbCalendar,
      private route: ActivatedRoute,
      private router: Router) {
  }


  ngOnInit(): void {
    this.message = '';
    this.retrieveServices();
    this.retrieveProducts();
    this.retrieveProviders();
    this.currentDate = this.calendar.getToday();
  }

  retrieveServices(): void {
    this.apiCallerService.setEntityEndpoint('service')
    this.apiCallerService.getAll()
        .subscribe(
            data => {
              this.services = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
  }

  retrieveProducts(): void {
    this.apiCallerService.setEntityEndpoint('product')
    this.apiCallerService.getAll()
        .subscribe(
            data => {
              this.products = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
  }

  retrieveProviders(): void {
    this.apiCallerService.setEntityEndpoint('provider')
    this.apiCallerService.getAll()
        .subscribe(
            data => {
              this.providers = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
  }

}
