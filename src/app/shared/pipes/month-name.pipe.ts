import { Pipe, PipeTransform } from '@angular/core';
import { AppConstants } from '../constants/app.constants';

@Pipe({
  name: 'monthName'
})
export class MonthNamePipe implements PipeTransform {
  public monthList: string[] = AppConstants.months;

  transform(value: number): string {
    return this.monthList[value-1];
  }

}
