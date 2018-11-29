import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenudataService } from './menu/menudata.service';
import { CustomerComponent } from './customer/customer.component';
import { CustdataService } from './customer/custdata.service';
import { BillingComponent } from './billing/billing.component';
import { DateComponent } from './date/date.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { MainfilterPipe } from './mainfilter.pipe';
import { StarterfilterPipe } from './starterfilter.pipe';
import { DessertfilterPipe } from './dessertfilter.pipe';

import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app.routing';
import { Pipe, PipeTransform } from '@angular/core';
/*import {Http, Response} from '@angular/http';*/
import {getLocaleCurrencySymbol} from "@angular/common";
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map, filter, scan, switchMap, catchError } from 'rxjs/operators';
import { CustomerfilterPipe } from './customerfilter.pipe';




/*import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';*/

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainfilterPipe,
    StarterfilterPipe,
    DessertfilterPipe,
    CustomerComponent,
    BillingComponent,
    DateComponent,
    MainpageComponent,
    CustomerfilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MenudataService,
    CustdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
    {
    provide: LOCALE_ID,
    useValue: 'EUR' // 'de-DE' for Germany, 'fr-FR' for France ...
  },
  */
