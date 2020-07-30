import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {

  @Input() deltaValue: number ; 
  @Input() nbr_a: number;
  @Input() nbr_b: number;
  @Input() nbr_c: number;

  mesazy: string;
  solution1:number;
  solution2:number;

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    // this.deltaValue = event.target.value * 1;
    if (this.deltaValue > 0) {
      this.mesazy = 'positif';
      this.solution1 = -this.nbr_b / 2 * this.nbr_a;
    }
    else if (this.deltaValue === 0) {
      this.mesazy = 'nul';      
       this.solution1 = -this.nbr_b/2*this.nbr_a;
    }
    else if (this.deltaValue < 0) {
      this.mesazy = ' negatif, donc pas de solution réelle';
    }
  }

}
