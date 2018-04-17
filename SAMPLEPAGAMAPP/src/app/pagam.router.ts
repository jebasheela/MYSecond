import { MyBankComponent } from './my-bank/my-bank.component';
import { AppComponent } from './app.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,RouterModule } from '@angular/router';
import { PagamHeaderComponentComponent } from './pagam-header-component/pagam-header-component.component';
import { PagamSidebarComponent } from './pagam-sidebar/pagam-sidebar.component';
import { SwiftpaymentComponent } from './swiftpayment/swiftpayment.component';
import { HomeComponent } from './Home/Home.Component';
import { AmazonPayLandingPageComponent } from './AmazonPay-landing-page/AmazonPay-landing-page.component';

const routes: Routes = [
    { path: '', component: SwiftpaymentComponent },
    { path: 'swift-pay', component: SwiftpaymentComponent },
    {path: 'mybank' ,component: MyBankComponent},
    { path: 'home', component: HomeComponent },
    { path: 'add-book', component: AmazonPayLandingPageComponent }
];

@NgModule({
        imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]  
})
export class PagamRouter {};
export const pagamComponents=[AppComponent, PagamHeaderComponentComponent,PagamSidebarComponent,SwiftpaymentComponent,MyBankComponent,HomeComponent ];