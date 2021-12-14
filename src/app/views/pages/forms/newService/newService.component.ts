import {Component, OnInit} from '@angular/core';

import {APICallerService} from '../../../../services/apicaller.service';

@Component({
    selector: 'app-new-service-component',
    templateUrl: './newService.component.html',
    styleUrls: ['./newService.component.scss']
})
export class NewServiceComponent implements OnInit {
    message = '';
    providers: any;
    obj = {
        provider: '',
        name: '',
        description: '',
        type: '',
        provincia: '',
        canton: ''
    };
    submitted = false;

    constructor(private apiCallerService: APICallerService) {
    }

    ngOnInit(): void {
        this.message = '';
        this.retrieveProviders();
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

    save(): void {
        this.apiCallerService.setEntityEndpoint('service')
        const data = {
            provider: this.obj.provider,
            name: this.obj.name,
            description: this.obj.description,
            type: this.obj.type,
            provincia: this.obj.provincia,
            canton: this.obj.canton,
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
