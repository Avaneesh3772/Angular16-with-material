import { Component, OnInit } from '@angular/core';
import { RestatementConstants } from '../restatement.constants';

@Component({
  selector: 'app-restated-reports',
  templateUrl: './restated-reports.component.html',
  styleUrls: ['./restated-reports.component.scss']
})
export class RestatedReportsComponent implements OnInit {

  public ageTotal: number = 0;
  public showAge : boolean = false;
  public employeeInfo: any[] = RestatementConstants.employeeInfo;

  constructor() { }

  ngOnInit(): void {
    this.employeeInfo.forEach((item) => {
      this.ageTotal+=  item.age;
    })
  }

  getTotalAge() {
    this.showAge = true;
    return this.ageTotal;
  }

}
