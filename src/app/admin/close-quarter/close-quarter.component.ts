import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminConstants } from '../admin.constants';
import { UserDetails } from '../admin.models';

@Component({
  selector: 'app-close-quarter',
  templateUrl: './close-quarter.component.html',
  styleUrls: ['./close-quarter.component.scss']
})
export class CloseQuarterComponent implements OnInit {

  public formSubmitted = false;
  public topics: string[] = AdminConstants.topics;
  public timePreferences: string[] = AdminConstants.timeOptions;
  public userNameTD: string = '';
  public userEmailTD: string = '';
  public userPhoneTD: any = null;
  public userTopicTD: string = '';
  public userTimePreferenceTD: string = AdminConstants.timeOptions[0];
  public userSubscriptionTD: boolean = false;
  public userDetails = new UserDetails(this.userNameTD, this.userEmailTD, this.userPhoneTD, this.userTopicTD, this.userTimePreferenceTD, this.userSubscriptionTD)
  /* public userDetails = {
       userName: this.userNameTD,
       userEmail: this.userEmailTD,
       userPhone: this.userPhoneTD,
       userTopic: this.userTopicTD,
       userTimePreference: this.userTimePreferenceTD,
       userSubscription: this.userSubscriptionTD
  } */

  @ViewChild('userForm', {static: false}) userForm: NgForm | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('userDetails- ', this.userDetails);
  }

  getFormStatus($event: any) {
    console.log('userSubscription Value is => ', $event)
    console.log('userForm- ', this.userForm)
  }

  updateTopic(value: string) {
    console.log('topic select box value- ', value);
    this.userTopicTD = value;
  }

  updateTimePreference(time: string) {
    console.log('updateTimePreference value- ', time);
    this.userTimePreferenceTD = time;
  }

  formSubmit() {
    this.formSubmitted = true;
    console.log("After Submit userForm- ", this.userForm);
    console.log("After Submit userDetails- ", this.userDetails);

  }

}
