import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bike } from '../../interfaces/bike';
import { BikeService } from '../../services/bike.service';
import { Router } from '@angular/router';
// Again, importing everything we could need

@Component({
  selector: 'app-listings-new',
  templateUrl: './listings-new.component.html',
  styleUrls: ['./listings-new.component.css']
})
export class ListingsNewComponent implements OnInit {

    @Output() madeBike = new EventEmitter()
    // Here we have created an event EventEmitter
    // This will listen in our listings.component.html
    // document

    private newBike: Bike = {
        _id: "",
        title: "",
        price: 1,
        description: "",
        location: ""
    }
    // Here we define a private variable of type Bike

    error: object
    // Here we define error as an object

  constructor(
      private _bs: BikeService,
      private _router: Router,
  ) { }
    // Again naming the modules and services
    // that we might need to use

  ngOnInit() {
  }

  createListing(){
    this._bs.createListing(this.newBike)
    .then(data => {
        console.log(data);
        this.madeBike.emit('Made Bike');
    })
    .catch(err => {
        let myerr = JSON.parse(err._body)
        console.warn(myerr);
        this.error = myerr
    })
  }
  // Above we define createListing(), which is the
  // function that will run on submit of the form
  // to create a new listing
  // It says:
  // "When createListing() runs, go to the bikeservice and
  // run the createListing() function in that document using
  // the newBike variable from here (which now carries all the
  // form information) and then emit a message to our event listener
  // that we have made the bike. Catch any errors and add them to error."
}
