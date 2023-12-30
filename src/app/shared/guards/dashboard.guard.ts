import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogNotAuthorizedComponent } from '../components/dialog-not-authorized/dialog-not-authorized.component';
import { AppCommonService } from '../services/app-common.service';
import { AppInitializerDataService } from '../services/app-initializer-data.service';


@Injectable({
  providedIn: 'root'
})

export class DashboardGuard implements CanLoad {
  public appConfigData: any;

  constructor( private appInitializerDataService: AppInitializerDataService,
    private appCommonService: AppCommonService) {
      this.appConfigData = this.appInitializerDataService.getAppConfigartionData();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const checkCondition = this.appConfigData.roles.includes('dashboard')
      if(checkCondition) {
           return true;
      } else {
           this.appCommonService.openNotAuthorizedDialogBox(DialogNotAuthorizedComponent);
           return false;
      }
    }
}



