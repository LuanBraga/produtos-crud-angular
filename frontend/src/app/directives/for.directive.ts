import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForIn') numbers: number[];

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.numbers);
  }

}
