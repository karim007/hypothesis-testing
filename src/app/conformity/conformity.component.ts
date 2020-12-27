import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conformity',
  templateUrl: './conformity.component.html',
  styleUrls: ['./conformity.component.scss']
})
export class ConformityComponent implements OnInit {
  a:number;
  sd:number;
  n:number;
  m:number;
  t:number;
  fixed:number=2
  constructor() { }

  ngOnInit(): void {
  }

  compute(){
   let sm=  Number((this.sd/Math.sqrt(this.n-1)).toFixed(this.fixed))

   this.t= Number((Math.abs(this.m-this.a)/sm).toFixed(this.fixed))
  }

}
