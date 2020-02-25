import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from "@angular/core";
import { CounterService } from "../../services/counter.service.ts";

const COMPONENT_NAME = "GreatGrandchildComponent";
@Component({
  selector: "app-great-grandchild",
  templateUrl: "./great-grandchild.component.html",
  styleUrls: ["./great-grandchild.component.css"]
})
export class GreatGrandchildComponent
  implements OnInit, OnChanges {
  @Input() messageFromParent;
  @Input() isSendMessageDownButtonClicked;
  @Output() passDataToGrandchild = new EventEmitter();
  @Input() instanceNumber:string;
  message: string = "";
  upstream: boolean;
  isClicked: boolean = false;
  componentName: string = "GREAT-GRANDCHILD";


  constructor(public counterService: CounterService) {}

  ngOnInit() {
    this.counterService.activeComponent$.subscribe(test=>console.log('test: ', test))
  }

  handleClick(event) {
    setTimeout(() => {
      this.passDataToGrandchild.emit(this.message);
      this.upstream = true;
      this.isClicked = true;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["messageFromParent"]) {
      this.upstream = false;
    }
  }

  formatName(componentName){
    return `${componentName} #${this.instanceNumber}`
  }

}
