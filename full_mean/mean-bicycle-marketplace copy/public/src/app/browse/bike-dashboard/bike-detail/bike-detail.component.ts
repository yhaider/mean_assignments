import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../../../interfaces/bike';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {

    @Input() bike: Bike
    // Each bike-detail has a single bike input
  constructor() { }

  ngOnInit() {
  }

}
