import { CounterService } from 'src/app/services/counter/counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-state-management';


constructor(private CounterService:CounterService){



}

increment(){

this.CounterService.increment()

}

decrement(){

  this.CounterService.decrement()
  
  }

}
