import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from "@angular/core";
import { CounterService } from "../../services/counter.service.ts";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
  message: string;
  upstream: boolean;
  @Input() messageFromParent;
  @Input() isSendMessageDownButtonClicked;
  @Output() passDataToParent = new EventEmitter<string>();
  componentName:string = 'CHILD';

  constructor(private counterService:CounterService) {}

  ngOnInit() {
   
  }

  handleData(event) {
    this.message = event;
    setTimeout(() => {
      this.passDataToParent.emit(event);
      this.upstream = true;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['messageFromParent']) {
      this.upstream = false;
    };

  }

}
