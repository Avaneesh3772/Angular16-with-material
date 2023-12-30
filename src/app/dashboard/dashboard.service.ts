import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserList } from './dashboard.models';
import { WebApiService } from '../web-api.service';


@Injectable({
  providedIn: 'root'
})
export class DashboardService extends WebApiService{

  getUsersList(apiURL:string, httpParams?: HttpParams): Observable<UserList[]> {
    return this.baseHttpGetRequest(apiURL, httpParams)
  }

}
