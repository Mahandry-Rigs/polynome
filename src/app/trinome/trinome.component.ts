import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trinome',
  templateUrl: './trinome.component.html',
  styleUrls: ['./trinome.component.css']
})
export class TrinomeComponent implements OnInit {

  nbr_a: number;
  nbr_b:number;
  nbr_c: number;

  constructor() { }

  ngOnInit(): void {
  }

  

}
