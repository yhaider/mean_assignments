import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private newpoll = {
      question: "",
      creator: "",
      optionone: "",
      optiontwo: "",
      optionthree: "",
      optionfour: "",
  }
  private name: string
  // Declaring all of our variables

  constructor(
      private _us: UserService,
      private _ps: PollService,
      private _router: Router
  ) { }
  // Injecting necessary services

  ngOnInit() {
      this.getID()
  }
  // On page load we run our getID() function

  getID(){
      this._us.getID()
      .then(data => this.name = data.name)
      .catch(err => {
          console.warn(err);
          this._router.navigateByUrl('/')})
  }
  // This function will go to the user service and run the
  // getID() function there, retrieve data (the user's name in this case)
  // and save it in our name variable or retrieve an error and navigate
  // back to the login page

  create(){
      this.newpoll.creator = this.name;
      this._ps.create(this.newpoll)
      .then(data => {
          this._router.navigateByUrl('/dashboard')
      })
      .catch(err => console.warn(err))
  }
  // This function will first set our newpoll.creator to our name
  // variable (which because of the getID() function, is our currently
  // logged in user's name) and then it will go to our poll service
  // and run the create() function, passing in our newpoll variable (which
  // has our form information). We'll receive some data (the new poll) and then
  // navigate back to the dashboard. If we don't receive that data, then we'll
  // get an error
}
