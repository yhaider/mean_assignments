import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

@Input() type: String;
@Input() multiplier: String;
@Input() initial: Number

  constructor() { }

  ngOnInit() {
  }

}
