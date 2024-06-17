import { Component } from "@angular/core";







@Component({
  selector:'app-counter',
  template:`
  <p>
 {{counter}}
</p>
<button (click)="increaseby(+1)">+1</button>
<button (click)="decreaseby(-1)">-1</button>
<button (click)="resetBy()">Reset</button>
  `,
})
export class CounterComponent{
  counter:number = 10;

  increaseby(value:number){
    this.counter +=value
  }
  decreaseby(value:number){
    this.counter +=value
  }
  resetBy(){
    this.counter = 10
  }
}
