import { Component, Input, OnInit } from '@angular/core';
import { AppCommonService } from 'src/app/shared/services/app-common.service';
import { DateUtils } from 'src/app/shared/utilities/app.utilities';
import { TemplateList } from '../role.models';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  @Input() public monthlyTemplateList: TemplateList[] = [];
  public templateName: string = '';

  constructor(private appCommonService: AppCommonService) { }

  ngOnInit() {
    this.templateName = this.monthlyTemplateList[0].template;
  }

  checkStatus(status: string) {
    return this.appCommonService.getColorForStatus(status);
  }

  dateConvert(date: string) {
    return DateUtils.getUTCFormatTime(date);
  }

}
