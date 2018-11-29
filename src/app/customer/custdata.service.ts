import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { map, filter, scan, switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver, throwError } from 'rxjs';
import 'rxjs/Rx';

interface CustData {
  id: number,
  gender: string,
  name: string,
  address1: string,
  address2: string,
  city: string,
  occupation: string,
  phone: number
}
/*
@Injectable({
  providedIn: 'root'
})
export class CustdataService {

  constructor() { }
} */

@Injectable()
export class CustdataService {

  private _url: string = "src/apidata/custdata.json"

  constructor(private http: HttpClient) { }

  getCustomeComponent(): Observable <CustData[]> {
    return this.http.get<CustData[]>(this._url);
  /*   return this._url.asObservable(); */
/*      .pipe(map((data => { console.log("Menu", data) }))); */
  }
/*  getCustomeComponent(id: number): Observable<User> {
    return this.http.get<CustData[id]>(this._url);
  } */
}
