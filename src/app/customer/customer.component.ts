import { Component, OnInit } from '@angular/core';
import { CustdataService } from './custdata.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers = [];

  constructor(private _cust:CustdataService) { }

  ngOnInit() {
    this._cust.getCustomeComponent()
  /*      .subscribe(resMenuComponent => this.customers = resMenuComponent) */
       .subscribe(data => this.customers = data );  /* get the user data only to pass it down to the actual view */

/*        .subscribe(customers => {
          console.log(customers.name);
        }); */
/*        console.log(data); */
  /*        .subscribe(data => console.log(this.customers.filter(data => {return data.id == data})));
        .subscribe(data => console.log(this.customers.filter(data => this.posts = data}))); */

  }


/*  console.log(customers); */

/*  deletecustomers(customers){
    this._cust.deleteCustomers(customers.id).subscribe(data => this.customers = data) =>{
      this.customers.splice(this.customers.indexOf(customers),1);
    }
  } */

/*  addRecord(customers){
    // Push item to JSON Data
  } */

}
