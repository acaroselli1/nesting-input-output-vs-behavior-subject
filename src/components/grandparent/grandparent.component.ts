import { Component, OnInit, Output, EventEmitter,Input, SimpleChanges, OnChanges } from "@angular/core";

@Component({
  selector: "app-grandparent",
  templateUrl: "./grandparent.component.html",
  styleUrls: ["./grandparent.component.css"]
})
export class GrandparentComponent implements OnInit, OnChanges {
  @Output() passDataToGreatGrandParent = new EventEmitter<string>();
  @Input() messageFromParent;
  @Input() isSendMessageDownButtonClicked;
  componentName:string = 'GRANDPARENT';

  message: string;
  upstream: boolean;
  downstream: boolean;
  downstreamMessage:string;

  constructor() {}

  ngOnInit() {}

  handleData(event) {
    this.message = event;
    setTimeout(() => {
      this.passDataToGreatGrandParent.emit(event);
      this.upstream = true;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['messageFromParent']) {
      this.upstream = false;
    };

  }


}

