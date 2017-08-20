import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bike } from '../../../interfaces/bike';
import { BikeService } from '../../../services/bike.service';
import { Router } from "@angular/router";
// Importing all that we could need

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

 @Input() listing: Bike
 // We're inputting a listing of type bike
 // (look at listing-dashboard.component.html)

 @Output() bikeDeleted = new EventEmitter()
 // Here's our event EventEmitter

  constructor(
      private _bs: BikeService,
      private _router: Router
  ) { }
  // Calling the bikeservice and our router

  ngOnInit() {
  }

  updateListing(){
      this._bs.updateListing(this.listing)
      .then(data => {
          console.log(data);
          this._router.navigateByUrl('/listings')
      })
      .catch(err => {
          console.warn(err);
      })
  }
  // This says:
  // "When updateListing() is called, go to our BikeService
  // and run the updateListing() function there and then take
  // the data that we receive from that, console.log it, and then
  // navigate to a different page. Oh, and show any errors."


  deleteListing(){
      this._bs.deleteListing(this.listing._id)
      .then(data => {
          console.log(data);
          this.bikeDeleted.emit('deleted')
      })
      .catch(err => {
          console.warn(err);
      })

  }
  // This says:
  // "When deleteListing() is called, go to our BikeService
  // and run the deleteListing() function there and then take
  // the data that we receive from that, console.log it, and then
  // emit an event to our event emitter. Oh, and show any errors."
}
