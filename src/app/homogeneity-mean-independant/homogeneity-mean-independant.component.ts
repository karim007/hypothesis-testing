import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homogeneity-mean-independant',
  templateUrl: './homogeneity-mean-independant.component.html',
  styleUrls: ['./homogeneity-mean-independant.component.scss']
})
export class HomogeneityMeanIndependantComponent implements OnInit {
  significant:boolean=false;
  n1:number;
  m1:number;
  n2:number;
  m2:number;
  sd1:number;
  sd2:number;
  t:number;
  fixed:number=2

  constructor() { }

  ngOnInit(): void {
  }

  compute(){
    let absMeans=Math.abs(this.m1-this.m2);
    if(this.significant){
      let sd1est=Number((Math.pow(this.sd1,2)*this.n1/(this.n1-1)).toFixed(this.fixed))
      let sd2est=Number((Math.pow(this.sd2,2)*this.n2/(this.n2-1)).toFixed(this.fixed))
      this.t= Number((absMeans/Number((Math.sqrt( sd1est/this.n1 + sd2est/this.n2)).toFixed(this.fixed))).toFixed(this.fixed))
    }
    else{

      let tempFrac=Number(((this.n1* Math.pow(this.sd1, 2)+this.n2* Math.pow(this.sd2, 2) )/(this.n1+this.n2-2)).toFixed(this.fixed))
      let sdEst=Number(Math.sqrt( tempFrac ).toFixed(this.fixed));
      this.t= Number((absMeans/(sdEst* Number((Math.sqrt( (this.n1 + this.n2)/(this.n1*this.n2) )).toFixed(this.fixed)))).toFixed(this.fixed))
    }
  }

}
