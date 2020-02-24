import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CounterService } from "../../services/counter.service.ts";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
  message:string;
  upstream:boolean;

  @Output() passDataToGrandParent = new EventEmitter<string>();
  @Input() messageFromParent;
  @Input() isSendMessageDownButtonClicked;
  componentName:string ='PARENT'
   constructor(public counterService:CounterService) { }

  ngOnInit() {
  }
  
  handleData(event){
    this.message=event;
    setTimeout(()=>{this.passDataToGrandParent.emit(event); this.upstream=true},1000)
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['messageFromParent']) {
      this.upstream = false;
    };

  }

  
}