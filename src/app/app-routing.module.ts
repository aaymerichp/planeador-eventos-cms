import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseComponent} from './views/layout/base/base.component';
import {ErrorPageComponent} from './views/pages/error-page/error-page.component';

import {ProductComponent} from './views/pages/forms/product/product.component';
import {NewProductComponent} from './views/pages/forms/newProduct/newProduct.component';
import {ProductsDataTableComponent} from "./views/pages/tables/productsDataTable/productsDataTable.component";

import {ProviderComponent} from "./views/pages/forms/provider/provider.component";
import {ProvidersDataTableComponent} from "./views/pages/tables/providersDataTable/providersDataTable.component";
import {NewProviderComponent} from "./views/pages/forms/newProvider/newProvider.component";

import {ServiceComponent} from "./views/pages/forms/service/service.component";
import {ServicesDataTableComponent} from "./views/pages/tables/servicesDataTable/servicesDataTable.component";
import {NewServiceComponent} from "./views/pages/forms/newService/newService.component";

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        canActivate: [],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'products',
                component: ProductsDataTableComponent
            },
            {
                path: 'products/:uuid',
                component: ProductComponent
            },
            {
                path: 'new-product',
                component: NewProductComponent,
                pathMatch: 'full'
            },
            {
                path: 'providers',
                component: ProvidersDataTableComponent
            },
            {
                path: 'providers/:uuid',
                component: ProviderComponent
            },
            {
                path: 'new-provider',
                component: NewProviderComponent,
                pathMatch: 'full'
            },
            {
                path: 'services',
                component: ServicesDataTableComponent
            },
            {
                path: 'services/:uuid',
                component: ServiceComponent
            },
            {
                path: 'new-service',
                component: NewServiceComponent,
                pathMatch: 'full'
            },
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        ]
    },
    {
        path: 'error',
        component: ErrorPageComponent,
        data: {
            'type': 404,
            'title': 'Page Not Found',
            'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
        }
    },
    {
        path: 'error/:type',
        component: ErrorPageComponent
    },
    {path: '**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
