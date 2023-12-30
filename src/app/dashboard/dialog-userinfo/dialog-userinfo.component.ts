import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserList } from '../dashboard.models';

@Component({
  selector: 'app-dialog-userinfo',
  templateUrl: './dialog-userinfo.component.html',
  styleUrls: ['./dialog-userinfo.component.scss']
})
export class DialogUserinfoComponent implements OnInit {
  public userInfo: UserList;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.userInfo = data.userInfo;
  }

  ngOnInit(): void {
  }

}
