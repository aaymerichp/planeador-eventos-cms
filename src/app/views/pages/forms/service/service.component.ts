import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {APICallerService} from '../../../../services/apicaller.service';

@Component({
    selector: 'app-service-component',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {
    currentObj = null;
    message = '';
    providers: any;
    constructor(
        private apiCallerService: APICallerService,
        private route: ActivatedRoute,
        private router: Router) {
    }


    ngOnInit(): void {
        this.message = '';
        this.retrieveProviders();
        this.getObj(this.route.snapshot.paramMap.get('uuid'));
    }

    getObj(uuid): void {
        this.apiCallerService.setEntityEndpoint('service')
        this.apiCallerService.get(uuid)
            .subscribe(
                data => {
                    this.currentObj = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    update(): void {
        this.apiCallerService.setEntityEndpoint('service')
        this.apiCallerService.update(this.currentObj.uuid, this.currentObj)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'El proveedor fue actualizado';
                    this.router.navigate([`/services/${this.currentObj.uuid}`]);
                },
                error => {
                    console.log(error);
                });
    }

    delete(): void {
        this.apiCallerService.setEntityEndpoint('service')
        this.apiCallerService.delete(this.currentObj.uuid)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/services']);
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
