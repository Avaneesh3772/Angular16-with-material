import { Injectable } from '@angular/core';
import { AppConstants, AuthToken } from '../constants/app.constants';
import { AuthTokenService } from './auth-token.service';
import { UserAuthorizationService } from './user-authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerDataService {

  public userInformation: any;

  constructor(private userAuthorizationService: UserAuthorizationService,
    private authTokenService: AuthTokenService) {

  }

  AppConfigartionData(): Promise<any> {
    const promiseAppConfigartionData = new Promise((resolve, reject) =>{
      this.authTokenService.setTokenToSessionStorage('token', AuthToken);
      this.userAuthorizationService.getAppConfigData(AppConstants.appConfigDataURL).subscribe((response: any) => {
        if(response) {
          resolve('Promise is resolved successfully.');
          this.userInformation = response;
        } else {
          reject('Promise is rejected');
        }
     })
    });

    return promiseAppConfigartionData;
  }

  getAppConfigartionData() {
    return this.userInformation;
  }
}
