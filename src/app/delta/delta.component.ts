import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {

  @Input() deltaValue: number ; 
  @Input() a:number;
  @Input() b:number;
  @Input() c:number;

  mesazy: string;
  solution1:any;
  solution2:any;
  texta:any;

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    // this.deltaValue = event.target.value * 1;
    if (this.deltaValue > 0) {
      this.solution1 = -this.b - Math.sqrt(this.deltaValue)/ 2*this.a ;
      this.solution2 = -this.b + Math.sqrt(this.deltaValue)/ 2*this.a ;
      this.texta = 'Δ est Positif, donc 2 solution :  solution 1 = ' + this.solution1 + ' et  solution 2 = ' + this.solution2 ;
    }

    else if (this.deltaValue === 0) {
      this.solution1 = -this.b / 2 * this.a ;
      this.texta = ' Δ est nul, donc une solution double qui vaut: ' + this.solution1 ;
     }

    else if (this.deltaValue < 0) {
      this.texta = 'Δ est Negatif, Pas de solution réelles.';
    }
  }

  }
