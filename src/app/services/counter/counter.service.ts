import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  // this count subject will hold our count value.

  private countSubject = new BehaviorSubject<number>(0)

  // expose (public) the count subject as an observable:
  public count$ = this.countSubject.asObservable();


  //emit new value using next()
  increment() {

   this.countSubject.next(this.countSubject.value+1)

  }

  decrement() {

    this.countSubject.next(this.countSubject.value-1)
 
   }

  constructor() { }
}
