import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
   
  
  count: number = 0;


  constructor(private counterService: CounterService){}

  ngOnInit(){
   // subscribe to public (exposed) count$  value here
   this.counterService.count$.subscribe(count =>{

    this.count = count;
   })


  }

  
  increment(){

    this.counterService.increment()

  }

  decrement(){

    this.counterService.decrement()

  }



}
