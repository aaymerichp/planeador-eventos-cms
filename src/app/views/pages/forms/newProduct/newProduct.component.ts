import {Component, OnInit} from '@angular/core';

import {APICallerService} from '../../../../services/apicaller.service';

@Component({
    selector: 'app-new-product-component',
    templateUrl: './newProduct.component.html',
    styleUrls: ['./newProduct.component.scss']
})
export class NewProductComponent implements OnInit {
    message = '';
    services: any;
    product = {
        service: '',
        name: '',
        description: '',
        price: '',
        image: '',
        rate_type: null,
        is_active: true,
    };
    submitted = false;

    constructor(private apiCallerService: APICallerService) {
    }

    ngOnInit(): void {
        this.message = '';
        this.retrieveServices();
    }

    retrieveServices(): void {
        this.apiCallerService.setEntityEndpoint('service')
        this.apiCallerService.getAll()
            .subscribe(
                data => {
                    const activesOnly = data.filter(d => d.is_active);
                    this.services = activesOnly;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    save(): void {
        this.apiCallerService.setEntityEndpoint('product')
        const data = {
            service: this.product.service,
            name: this.product.name,
            description: this.product.description,
            price: this.product.price,
            image: 'string',
            rate_type: this.product.rate_type,
            is_active: true
        };
        this.apiCallerService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                    this.submitted = true;
                },
                error => {
                    console.log(error);
                });
    }
}
