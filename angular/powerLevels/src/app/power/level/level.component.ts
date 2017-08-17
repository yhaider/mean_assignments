import { Component, OnInit, Input } from '@angular/core';
// Input must be imported for this functionality

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

@Input() type: String;
@Input() multiplier: String;
@Input() initial: Number
// Using input to grab from the parent
// component into the child

  constructor() { }

  ngOnInit() {
  }

}
