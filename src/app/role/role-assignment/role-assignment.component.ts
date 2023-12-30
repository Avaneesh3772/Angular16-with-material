import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RoleConstants } from '../role.constants';
import { Users, UsersRole } from '../role.models';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-assignment',
  templateUrl: './role-assignment.component.html',
  styleUrls: ['./role-assignment.component.scss']
})
export class RoleAssignmentComponent implements OnInit {

  public searchUser: FormControl = new FormControl();
  public responseData: any[] = [];
  public errorMessage: string = '';
  public filteredItem: any[] = [];
  public dataSource: any[] = [];
  public displayedColumns: string[] = RoleConstants.displayedColumns;
  public userFullName: string = '';
  public userDataLoaded = false;
  public isUserDataAvailable = false;
  public showResultBox: boolean = false;
  public noRecordsFound: boolean = false;

  constructor(private roleService: RoleService) {
    this.getUserData();
  }

  ngOnInit(): void {
    this.subscribeToTextbox()
  }

  getUserData() {
      this.roleService.getUsersList(RoleConstants.roleAssignmentDataURL).subscribe((response: Users[]) =>{
        this.responseData = response;
    }, (error: HttpErrorResponse) =>{
      this.errorMessage = error.message;
      console.log('this.errorMessage', this.errorMessage);
    })
  }

  subscribeToTextbox() {
    this.searchUser.valueChanges.subscribe((value:any) => {
      this.filteredItem = this.responseData.filter(item => {
        const fullName = `${item.firstName} ${item.lastName}`;
        return fullName.includes(value);
      });

      if(value.length > 0 && this.filteredItem && this.filteredItem.length === 0) {
        this.noRecordsFound = true;
      } else {
        this.noRecordsFound = false;
      }

      if(value.length > 0 && this.filteredItem && this.filteredItem.length > 0) {
        this.showResultBox = true;
      } else {
        this.showResultBox = false
      }

      console.log('this.filteredItem', this.filteredItem);

    });
  }

  selectedValue(item: any) {
    this.isUserDataAvailable = true;
    this.showResultBox = false;
    this.userFullName = `${item.firstName} ${item.lastName}`;
    this.roleService.getUserFullDetails(RoleConstants.roleAssignmentUserDataURL).subscribe((response: UsersRole[]) =>{
      this.userDataLoaded = true;

      this.dataSource = response.filter((eachElement) => {
        return eachElement.employeeIdentifier === item.employeeIdentifier;
      })
      console.log('this.dataSource', this.dataSource)
  }, (error: HttpErrorResponse) =>{
    this.errorMessage = error.message;
    console.log('this.errorMessage', this.errorMessage);
  })
  }

}
