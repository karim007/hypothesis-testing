import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snedecor',
  templateUrl: './snedecor.component.html',
  styleUrls: ['./snedecor.component.scss']
})
export class SnedecorComponent implements OnInit {
  n1:number;
  m1:number;
  n2:number;
  m2:number;
  sd1:number;
  sd2:number;
  f:number;
  fixed:number=2;

  constructor() { }

  ngOnInit(): void {
  }

  compute(){
    let sd1est=Number(( Math.pow(this.sd1,2)*this.n1/(this.n1-1)).toFixed(this.fixed))
    let sd2est= Number((Math.pow(this.sd2,2)*this.n2/(this.n2-1)).toFixed(this.fixed))
    if(sd1est>=sd2est)this.f=Number((sd1est/sd2est).toFixed(this.fixed))
    else this.f=Number((sd2est/sd1est).toFixed(this.fixed))
  }

}
