import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {APICallerService} from '../../../../services/apicaller.service';

@Component({
    selector: 'app-provider-component',
    templateUrl: './provider.component.html',
    styleUrls: ['./provider.component.scss']
})

export class ProviderComponent implements OnInit {
    currentObj = null;
    message = '';
    users: any;
    constructor(
        private apiCallerService: APICallerService,
        private route: ActivatedRoute,
        private router: Router) {
    }


    ngOnInit(): void {
        this.message = '';
        this.retrieveUsers();
        this.getObj(this.route.snapshot.paramMap.get('uuid'));
    }

    getObj(id): void {
        this.apiCallerService.setEntityEndpoint('provider')
        this.apiCallerService.get(id)
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
        this.apiCallerService.setEntityEndpoint('provider')
        this.apiCallerService.update(this.currentObj.uuid, this.currentObj)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'El proveedor fue actualizado';
                    this.router.navigate([`/providers/${this.currentObj.uuid}`]);
                },
                error => {
                    console.log(error);
                });
    }

    delete(): void {
        this.apiCallerService.setEntityEndpoint('provider')
        this.apiCallerService.delete(this.currentObj.uuid)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/providers']);
                },
                error => {
                    console.log(error);
                });
    }

    retrieveUsers(): void {
        this.apiCallerService.setEntityEndpoint('user')
        this.apiCallerService.getAll()
            .subscribe(
                data => {
                    this.users = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

}
