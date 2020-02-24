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
  implements OnInit, OnChanges, AfterViewInit {
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

  ngAfterViewInit() {
  //   let greatGrandChild = document.getElementById("great-grandchild");
  //   let coordinates = greatGrandChild.getBoundingClientRect();
  //   console.log('getBoundingClient: ',greatGrandChild.getBoundingClientRect());
  //   this.counterService.drawingContext$.subscribe(context => {
  //     console.log("sub context: ", context);
  //     context.moveTo(coordinates.right, coordinates.top + coordinates.height/2);
  //     context.lineTo(coordinates.right + 500, coordinates.top + coordinates.height/2 );
  //     context.lineTo(coordinates.right + 500, coordinates.top - 975);
  //     context.stroke();
  //   });
  }
}
