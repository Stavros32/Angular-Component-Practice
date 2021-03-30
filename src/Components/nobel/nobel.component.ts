import { Component, OnInit } from '@angular/core';
import { Complex } from './complexNobelModel';
import { NobelService } from './nobel.service';

@Component({
  selector: 'app-nobel',
  templateUrl: './nobel.component.html',
  styleUrls: ['./nobel.component.css']
})
export class NobelComponent implements OnInit {

  item!:Complex;


  getPrizes(){
    this.service.getPrizes().subscribe(data => this.item = data);
  }


  constructor(private service:NobelService) { }

  ngOnInit(): void {
    this.getPrizes();
  }

}
