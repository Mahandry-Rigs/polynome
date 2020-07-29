import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {

  @Input() deltaValue: number
  constructor() { }

  ngOnInit(): void {
  }

testDelta(){
  let message: string;
  let x:number;
  switch (this.deltaValue) { 

  // Cas 1: deltaValue = zero
    case 0: 
      message = 'delta zero'; 
      x = - nbr_b/2*nbr_a; 
    break;

// Cas 2: deltaValue negatif (Tsy haiko manao azy)
    case -3:
      message = 'delta negatif';     
    break;

// Cas 3: autre cas
    default:
      message = 'delta positif';     
break;
}
 console.log(message);
 return (message)
}

}