import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { CounterService } from "../services/counter.service.ts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild("canvas", { static: false }) canvas: ElementRef;

  name = "Angular";
  // context: CanvasRenderingContext2D;

  constructor(public counterService: CounterService) {}

  ngOnInit() {
   

    // window.addEventListener("scroll", () => {
    //   this.canvas.nativeElement.width = window.document.body.clientWidth;
    //   this.canvas.nativeElement.height = window.document.body.clientHeight;
    // });

    const serviceLayerMessage = document.getElementById(
      "service-layer-message"
    );

    serviceLayerMessage.addEventListener("animationend", () => {
      serviceLayerMessage.classList.remove("animated", "flash");
    });
    this.counterService.isIncrementOrDecrementClicked$.subscribe(value => {
      if (value) {
        serviceLayerMessage.classList.add("animated", "flash");
      }
    });
  }

  ngAfterViewInit() {
    // this.canvas.nativeElement.width = window.innerWidth;
    // this.canvas.nativeElement.height = window.innerHeight;
    // // window.addEventListener("resize", () => {
    // //   this.canvas.nativeElement.width = window.innerWidth;
    // //   this.canvas.nativeElement.height = window.innerHeight;
    // // });
    // let context = (this.canvas.nativeElement as HTMLCanvasElement).getContext(
    //   "2d"
    // );
    // this.counterService.drawingContext$.next(context);

  }
}
