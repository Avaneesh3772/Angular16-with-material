import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(protected http: HttpClient) { }

  baseHttpGetRequest(apiURL: string, httpParams?: HttpParams): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(apiURL, {params: httpParams, headers: httpHeaders})
                      .pipe(catchError(this.errorHandler));
  }

  baseHttpPostRequest(apiURL: string, body: any, httpParams?: HttpParams): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(apiURL, JSON.stringify(body), {params: httpParams, headers: httpHeaders})
                    .pipe(catchError(this.errorHandler));
  }

  baseHttpPutRequest(apiURL: string, body: any, httpParams?: HttpParams): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(apiURL, JSON.stringify(body), {params: httpParams, headers: httpHeaders})
                    .pipe(catchError(this.errorHandler));
  }

  baseHttpDeleteRequest(apiURL: string, httpParams?: HttpParams): Observable<any>{

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.delete(apiURL, {params: httpParams, headers: httpHeaders})
                    .pipe(catchError(this.errorHandler));
}

  errorHandler(error: HttpErrorResponse) {
    console.log('web api service error', error);
    return throwError(error || 'Service Error');
  }
}
