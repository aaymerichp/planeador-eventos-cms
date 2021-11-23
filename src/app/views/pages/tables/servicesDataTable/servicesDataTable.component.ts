import {Component, OnInit} from '@angular/core';

import {DataTable} from 'simple-datatables';
import {Router} from '@angular/router';

import {APICallerService} from '../../../../services/apicaller.service';

@Component({
    selector: 'app-service-data-table',
    templateUrl: './servicesDataTable.component.html',
    styleUrls: ['./servicesDataTable.component.scss']
})

export class ServicesDataTableComponent implements OnInit {
    objList: any;
    currentobj = null;

    constructor(private router: Router, private apiCallerService: APICallerService) {
    }

    ngOnInit(): void {
        this.apiCallerService.setEntityEndpoint('service')
        this.retrieveList();
    }

    retrieveList(): void {
        this.apiCallerService.getAll()
            .subscribe(
                data => {
                    this.objList = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}
