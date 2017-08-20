import { Component, OnInit } from '@angular/core';
import { BikeService } from '../services/bike.service';
import { Bike } from '../interfaces/bike';
import { Router, ActivatedRoute } from '@angular/router';
// Here we import our service we created, our bike interface,
// and our Router/Activated Route modules

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {


    listings: Array<Bike> = []
    // Declaring an array containing type Bike
    // that is currently empty

  constructor(
      private _bs: BikeService,
      private _route: ActivatedRoute,
      private _router: Router
  ) { }
    // Here we name the different technologies
    // we imported so we can use it

  ngOnInit() {
      this._bs.getBikes()
      .then(bikes => this.listings)
      .catch(err => console.log(err))
  }
  // The above section (in English) says:
  // "On load, go to our BikeService and run
  // the getBikes() function listed in that file.
  // Then, take the data you get from there, bring it,
  // and put it into our listings array in this file
  // that we defined earlier. Also, catch any errors
  // and console.log them for us."

}
