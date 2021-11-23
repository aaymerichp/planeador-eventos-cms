import {Component, OnInit} from '@angular/core';

import {APICallerService} from '../../../../services/apicaller.service';

@Component({
    selector: 'app-new-provider-component',
    templateUrl: './newProvider.component.html',
    styleUrls: ['./newProvider.component.scss']
})
export class NewProviderComponent implements OnInit {
    message = '';
    users: any;
    obj = {
        user: '',
        company_name: '',
        subscription: ''
    };
    submitted = false;

    constructor(private apiCallerService: APICallerService) {
    }

    ngOnInit(): void {
        this.message = '';
        this.retrieveUsers();
    }

    retrieveUsers(): void {
        this.apiCallerService.setEntityEndpoint('user')
        this.apiCallerService.getAll()
            .subscribe(
                data => {
                    const activesOnly = data.filter(d => d.is_active);
                    this.users = activesOnly;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    save(): void {
        this.apiCallerService.setEntityEndpoint('provider')
        const data = {
            user: this.obj.user,
            company_name: this.obj.company_name,
            subscription: this.obj.subscription
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
