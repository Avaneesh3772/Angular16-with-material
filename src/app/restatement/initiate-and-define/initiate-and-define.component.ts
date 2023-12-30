import { Component, OnInit } from '@angular/core';
import { delay, filter, from, map, mergeAll, Observable, of, Subscription, take, takeLast, timer } from 'rxjs';
import { RestatementConstants } from '../restatement.constants';

@Component({
  selector: 'app-initiate-and-define',
  templateUrl: './initiate-and-define.component.html',
  styleUrls: ['./initiate-and-define.component.scss']
})
export class InitiateAndDefineComponent implements OnInit {

  
  public colors: string[] = [ 'Green', 'Pink', 'Red', 'Yellow'];
  public fruites: string[] = ['Apple', 'Banana', 'Grapes', 'Mango'];
  public empoyee: any[] = RestatementConstants.employeeInfo;
  public colorObs: Observable<any> | undefined;
  public empoyeeObs: Observable<any> | undefined;
  public countryObs: Observable<any> = new Observable((observer) => {
    observer.next(RestatementConstants.countries)
  });
  public timerSubscription!: Subscription;
  public higherOrderObs!: Subscription;

  constructor() { }
  

  ngOnInit(): void {
    this.colorObs = from(this.colors);
    this.empoyeeObs = from(this.empoyee);

    this.colorObs.pipe (
      delay(2000),
      map(item => {
        return `Color ${item}`
      }),
      takeLast(1)
    ).subscribe(data => {
      console.log(data)
    })


    this.empoyeeObs.pipe (
      delay(2000),      
      filter(item => item.age > 25), 
      take(2),     
      map(item => {
        return item;
      })
    ).subscribe(data => {
      console.log(data)
    })


    this.countryObs.pipe (
      delay(2000),      
      filter(item => item[0].name === 'India'),          
      map(item => {
        return item;
      }),
      
    ).subscribe( data => {
      console.log(data)
    })

    const timerObs = timer(1000, 1000).pipe(
      map(data => data*2)
    ) 

    this.timerSubscription = timerObs.subscribe(data => {
      console.log('timer obeservable' + data); 
      if(data === 10) 
      this.timerSubscription.unsubscribe();      
    })

    this.higherOrderObs = from(['Sun','Mon','Tue','Wed','Thu','Fri','Sat'])
                          .pipe(
                            map(item => {
                              return of(item + ' is a Weekday');
                           }),
                           mergeAll()
                          )
                          .subscribe(data => {                            
                            console.log(data)
                          })


  }


  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

}
