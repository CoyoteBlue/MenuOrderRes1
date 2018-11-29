import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*   objDate = Date.now();

   $scope.formatDate = function(date){
        var dateOut = new Date(date);
        return dateOut;*/
    today: number = Date.now();
}
