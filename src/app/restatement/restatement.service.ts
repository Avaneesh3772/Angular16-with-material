import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommentsList } from './restatement.models';
import { WebApiService } from '../web-api.service';

@Injectable({
  providedIn: 'root'
})
export class RestatementService extends WebApiService{


  getCommentsList(apiURL:string, httpParams?: HttpParams): Observable<CommentsList[]> {
    return this.baseHttpGetRequest(apiURL, httpParams)
  }

}
