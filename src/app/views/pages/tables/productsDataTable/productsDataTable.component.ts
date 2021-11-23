import {Component, OnInit} from '@angular/core';

import {DataTable} from 'simple-datatables';
import {Router} from '@angular/router';

import {APICallerService} from '../../../../services/apicaller.service';

@Component({
    selector: 'app-product-data-table',
    templateUrl: './productsDataTable.component.html',
    styleUrls: ['./productsDataTable.component.scss']
})

export class ProductsDataTableComponent implements OnInit {
    products: any;
    currentProduct = null;

    constructor(private router: Router, private productService: APICallerService) {
    }

    ngOnInit(): void {
        this.productService.setEntityEndpoint('product')
        this.retrieveProducts();
    }

    retrieveProducts(): void {
        this.productService.getAll()
            .subscribe(
                data => {
                    this.products = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}
