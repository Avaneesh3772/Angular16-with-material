import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppCommonService } from 'src/app/shared/services/app-common.service';
import { DateUtils } from 'src/app/shared/utilities/app.utilities';
import { AdminConstants } from '../admin.constants';
import { TemplateDetails } from '../admin.models';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-rounding-model-calculation',
  templateUrl: './rounding-model-calculation.component.html',
  styleUrls: ['./rounding-model-calculation.component.scss']
})
export class RoundingModelCalculationComponent implements OnInit {

  public dataSource: TemplateDetails[] = [];
  public displayedColumns: string[] = AdminConstants.displayedColumns;
  public errorMessage: string = '';
  public userDataLoaded = false;
  constructor(private adminService: AdminService, private appCommonService: AppCommonService) {
    this.showUserTable();
  }

  ngOnInit(): void {
  }

  showUserTable() {
    this.adminService.getUsersList(AdminConstants.adminMockDataURL).subscribe((response: TemplateDetails[]) =>{
      this.dataSource = response;
      this.userDataLoaded = true;
      console.log('adminMockData', response);
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
      console.log('this.errorMessage', this.errorMessage);
    })
  }

  checkStatus(status: string): string {
      return this.appCommonService.getColorForStatus(status);
  }

  dateConvert(date: string) {
    return DateUtils.getUTCFormatTime(date);
  }

}
