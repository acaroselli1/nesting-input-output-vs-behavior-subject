import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class CounterService {
  // Can not be accessed directly outside of class
  private initialValue = 0;
  private initialMessage = "";
  private isIncrementOrDecrementClicked = false;
  // public drawingContext$:Subject<CanvasRenderingContext2D> = new Subject<CanvasRenderingContext2D>();

  // Can not be accessed directly outside of class
  private isTimerExpired$ = new BehaviorSubject<boolean>(false);
  private count$ = new BehaviorSubject<number>(this.initialValue);
  private serviceLayerMessage$ = new BehaviorSubject<string>(
    this.initialMessage
  );
  private isIncrementOrDecrementClicked$ = new BehaviorSubject<boolean>(
    this.isIncrementOrDecrementClicked
  );
  private activeComponent$ = new BehaviorSubject<string>("");

  constructor() {}

  public incrementOrDecrementCount(type, componentName): void {
    this.resetTimer();
    this.startTimer();
    this.setActiveComponent(componentName);
    this.calculateCurrentValue(type);
    this.setMessage(type, componentName);
    this.isIncrementOrDecrementClicked$.next(true);
  }

  private setMessage(type, componentName) {
    let message = `Service ${type}Count() method called from ${componentName} component. BehaviorSubject decremented.`;
    this.serviceLayerMessage$.next(message);
  }

  private startTimer() {
    setTimeout(() => {
      this.isTimerExpired$.next(true);
    }, 1000);
  }

  private resetTimer() {
    this.isTimerExpired$.next(false);
  }

  private setActiveComponent(componentName) {
    this.activeComponent$.next(componentName);
  }

  private calculateCurrentValue(type){
     let currentValue = this.count$.getValue();
    if (type === "increment") {
      currentValue++;
    } else if ((type = "decrement")) {
      currentValue--;
    } 
    this.count$.next(currentValue);
  }
}
