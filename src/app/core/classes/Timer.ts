import { Observable, Subject, Subscription, timer } from "rxjs";

export class Timer {
  private step: number;
  // private timer!: Observable<number> | null;
  private subscription!: Subscription;
  private _updateSub = new Subject();

  update$ = this._updateSub.asObservable();

  // step in miliseconds
  constructor(step: number) {
    this.step = step;
  }

  start() {
    // timer = timer(this.step);
    this.subscription = timer(this.step).subscribe(val => {
      this._updateSub.next(this.step);
    });
  }

  stop() {
    this.subscription?.unsubscribe();
    // this.timer = null;
  }
}
