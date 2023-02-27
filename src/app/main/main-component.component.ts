import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
  tasks: Array<[]> = [ ]
  private count = new BehaviorSubject<number>(0);

  constructor( ) {

}

private _count = new BehaviorSubject<number>(0);

get count$() {
  return this._count.asObservable();
}

incrementCount() {
  const currentValue = this._count.value;
  this._count.next(currentValue + 1);
}
}
