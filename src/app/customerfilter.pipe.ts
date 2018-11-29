import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerfilter',
  pure: false
})
export class CustomerfilterPipe { /* implements PipeTransform  */

  transform(value) {
    return value.filter((customers)=> {
      // filter out only Main courses
      return customers.gender  === 'male' 
        /* && item.address.county === 'something else';*/
    });
  }
/*  transform(value: any, args?: any): any {
    return null;
  } */

}
