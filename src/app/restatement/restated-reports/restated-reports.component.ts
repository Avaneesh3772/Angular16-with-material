import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restated-reports',
  templateUrl: './restated-reports.component.html',
  styleUrls: ['./restated-reports.component.scss']
})
export class RestatedReportsComponent implements OnInit {

  searchTerm: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)])
  
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.searchTerm.valueChanges
      .pipe(
        filter(() => this.searchTerm.valid),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((text) => {
          return this.fetchResult({ q: text })
        })
      )
      .subscribe(data => {
        console.log('Subscribe data', data)
      })
  }
  fetchResult(queryParams?: any): Observable<any> {
    const options = {
      ...(queryParams && { params: queryParams })
    }
    console.log('options', options)
    
    return this.http.get('https://api.storerestapi.com/products', options)
  }

}
