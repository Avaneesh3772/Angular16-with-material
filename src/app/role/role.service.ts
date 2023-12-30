import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from '../web-api.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private webApiService: WebApiService) { }

  getUsersList(apiURL:string, httpParams?: HttpParams): Observable<any[]> {
    return this.webApiService.baseHttpGetRequest(apiURL, httpParams)
  }
  getUserFullDetails(apiURL:string, httpParams?: HttpParams): Observable<any[]> {
    return this.webApiService.baseHttpGetRequest(apiURL, httpParams)
  }

}
