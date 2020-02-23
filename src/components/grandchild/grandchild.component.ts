import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CounterService } from "../../services/counter.service.ts";

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})

export class GrandChildComponent implements OnInit, OnChanges {
  message: string;
  upstream: boolean;
  componentName:string = 'GRANDCHILD';
  @Input() messageFromParent;
  @Input() isSendMessageDownButtonClicked;

  @Output() passDataToChild = new EventEmitter<string>();

  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

  handleData(event) {
    this.message = event;
    setTimeout(() => { this.passDataToChild.emit(event); this.upstream = true }, 1000)
  }
  ngOnChanges(changes: SimpleChanges) {

    if (changes['messageFromParent']) {
      this.upstream = false;
    };

  }

}