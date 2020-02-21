import { Component, OnInit,Input } from '@angular/core';
import { CounterService } from "../../services/counter.service.ts";



@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})


export class CountComponent implements OnInit {

@Input() parentComponentName;

 constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

  incrementCount(componentName) {
    this.counterService.incrementCount(this.parentComponentName);
  }

  decrementCount(componentName) {
    this.counterService.decrementCount(this.parentComponentName);
  }

}