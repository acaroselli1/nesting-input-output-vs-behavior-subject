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
  private activeComponent$ = new BehaviorSubject<string>('');

  constructor() {}

  // Can be accessed publicly only by components, other services, etc. with CounterService injected
  public getCount(): Observable<number> {
    return this.count$;
  }

  public incrementCount(componentName): void {
    this.isTimerExpired$.next(false);
    setTimeout( ()=>{this.isTimerExpired$.next(true)} ,1000);
    console.log("componentName: ", componentName);
    this.activeComponent$.next(componentName);
    let currentValue = this.count$.getValue();
    currentValue++;
    this.count$.next(currentValue);
    let incrementMessage = `Service incrementCount() method called from ${componentName} component. BehaviorSubject incremented.`;
    this.serviceLayerMessage$.next(incrementMessage);
    this.isIncrementOrDecrementClicked$.next(true);
    
  }

  public decrementCount(componentName): void {
    this.isTimerExpired$.next(false);
    setTimeout( ()=>{this.isTimerExpired$.next(true)} ,1000);
    console.log("componentName: ", componentName);
    this.activeComponent$.next(componentName);
    let currentValue = this.count$.getValue();
    currentValue--;
    this.count$.next(currentValue);
    let decrementMessage = `Service decrementCount() method called from ${componentName} component. BehaviorSubject decremented.`;
    this.serviceLayerMessage$.next(decrementMessage);
    this.isIncrementOrDecrementClicked$.next(true);
  }

}
