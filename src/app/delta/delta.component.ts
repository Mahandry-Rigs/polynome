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



}


