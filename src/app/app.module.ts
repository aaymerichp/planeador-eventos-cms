import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

import {LayoutModule} from './views/layout/layout.module';

import {AppComponent} from './app.component';
import {ErrorPageComponent} from './views/pages/error-page/error-page.component';
import {HttpClientModule} from '@angular/common/http';


import {ProductComponent} from './views/pages/forms/product/product.component';
import {NewProductComponent} from './views/pages/forms/newProduct/newProduct.component';
import {ProductsDataTableComponent} from './views/pages/tables/productsDataTable/productsDataTable.component';

import {ProviderComponent} from "./views/pages/forms/provider/provider.component";
import {NewProviderComponent} from "./views/pages/forms/newProvider/newProvider.component";
import {ProvidersDataTableComponent} from "./views/pages/tables/providersDataTable/providersDataTable.component";

import {ServiceComponent} from "./views/pages/forms/service/service.component";
import {NewServiceComponent} from "./views/pages/forms/newService/newService.component";
import {ServicesDataTableComponent} from "./views/pages/tables/servicesDataTable/servicesDataTable.component";
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';

@NgModule({
    declarations: [
        AppComponent,
        ErrorPageComponent,
        ProductComponent,
        NewProductComponent,
        ProductsDataTableComponent,
        ProviderComponent,
        NewProviderComponent,
        ProvidersDataTableComponent,
        ServiceComponent,
        NewServiceComponent,
        ServicesDataTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    scss: () => import('highlight.js/lib/languages/scss'),
                }
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
