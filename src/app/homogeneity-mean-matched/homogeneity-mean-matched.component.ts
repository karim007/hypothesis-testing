import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homogeneity-mean-matched',
  templateUrl: './homogeneity-mean-matched.component.html',
  styleUrls: ['./homogeneity-mean-matched.component.scss']
})
export class HomogeneityMeanMatchedComponent implements OnInit {
    mp:number;
    sdp:number;
    n:number;
    t:number;
    fixed:number=2;
    constructor() { }

    ngOnInit(): void {
    }

    compute(){
      this.t=Number(( this.mp/(this.sdp*(1/ Number(Math.sqrt(this.n-1).toFixed(this.fixed))  ))).toFixed(this.fixed));
    }

  }
