import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import{PagamHeaderComponentComponent} from './pagam-header-component/pagam-header-component.component';
import {PagamLandingPageComponent} from './pagam-landing-page/pagam-landing-page.component';
import {PagamSidebarComponent} from './pagam-sidebar/pagam-sidebar.component';
import{PagamFooterComponent} from './pagam-footer/pagam-footer.component';
import{SwiftpaymentComponent} from './swiftpayment/swiftpayment.component';
import { AmazonPayLandingPageComponent } from './AmazonPay-landing-page/AmazonPay-landing-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,PagamHeaderComponentComponent,PagamSidebarComponent,PagamLandingPageComponent,PagamFooterComponent,AmazonPayLandingPageComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
		  {
			path: 'home',
			component: HomeComponent
      },
      {
        path: 'add-book',
        component: AmazonPayLandingPageComponent
        },
      {
		    path: '',
		    redirectTo: '/home',
		    pathMatch: 'full'
		  }
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
