import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnChanges(): void {
    this.pinakas = Array.from(Array(Math.floor(this.RatingNo)).keys());
  }

  @Input() RatingNo!: number;
  pinakas!: number[];
  ngOnInit(): void {
  }

}
