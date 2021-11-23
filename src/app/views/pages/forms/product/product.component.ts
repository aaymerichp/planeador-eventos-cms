import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {APICallerService} from '../../../../services/apicaller.service';

@Component({
    selector: 'app-product-component',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    currentObj = null;
    message = '';
    services: any;
    constructor(
        private apiCallerService: APICallerService,
        private route: ActivatedRoute,
        private router: Router) {
    }


    ngOnInit(): void {
        this.message = '';
        this.retrieveServices();
        this.getObj(this.route.snapshot.paramMap.get('uuid'));
    }

    getObj(id): void {
        this.apiCallerService.setEntityEndpoint('product')
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
        this.apiCallerService.setEntityEndpoint('product')
        this.apiCallerService.update(this.currentObj.uuid, this.currentObj)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'El producto fue actualizado';
                    this.router.navigate([`/products/${this.currentObj.uuid}`]);
                },
                error => {
                    console.log(error);
                });
    }

    delete(): void {
        this.apiCallerService.setEntityEndpoint('product')
        this.apiCallerService.delete(this.currentObj.uuid)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/products']);
                },
                error => {
                    console.log(error);
                });
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

}
