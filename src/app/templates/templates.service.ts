import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from '../web-api.service';
import { CommentList, PostList } from './template.models';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService extends WebApiService{
  

  getAllTemplateData(apiURL: string, httpParams?: HttpParams): Observable<PostList[]> {
      return this.baseHttpGetRequest(apiURL, httpParams);
  }

  postNewTemplateData(apiURL:string, postBody: PostList, httpParams?: HttpParams): Observable<PostList> {
    return this.baseHttpPostRequest(apiURL, postBody, httpParams);
  }

  updateNewTemplateData(apiURL:string, updateBody:PostList, httpParams?: HttpParams): Observable<PostList> {
    return this.baseHttpPutRequest(apiURL, updateBody, httpParams);
  }

  deleteTemplateData(apiURL:string, httpParams?: HttpParams): Observable<PostList> {
    return this.baseHttpDeleteRequest(apiURL, httpParams);
  }

  getAllCommentsData(apiURL: string, httpParams?: HttpParams): Observable<CommentList[]> {
    return this.baseHttpGetRequest(apiURL, httpParams);
  }

}
