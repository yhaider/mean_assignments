import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private name: String
    private polls: Array<any>
    private deletedPollID
    private displaypolls: Array<any>
    private input = {
        key: ""
    }
    // Declaring all of our variables

  constructor(
      private _us: UserService,
      private _router: Router,
      private _ps: PollService
  ) { }
  // Injecting services and necessary technologies

  ngOnInit() {
      this.getID()
      this.displayPolls()
  }
  // On page load, the two above functions will run

  getID(){
        this._us.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/')
        })
    }
    // This function will go to the user service and run the
    // getID() function there, retrieve data (the user's name in this case)
    // and save it in our name variable or retrieve an error and navigate
    // back to the login page

    logout() {
        this._us.logout()
        .then(data => this._router.navigateByUrl('/'))
        .catch(err => console.warn(err))
    }
    // This function will go to the user service and run the
    // logout() function there, and will either receive data (which will
    // then reroute the user back to login) or get an error

    displayPolls(){
        this._ps.displayPolls()
        .then(data => {
            this.polls = data;
            this.displaypolls = data;
        })
        .catch(err => console.warn(err))
    }
    // This function will go to the poll service and run the
    // displayPolls() function there, and then will either get data
    // (all of the polls, in this case) and then assign the data to
    // two variables or it will receive an error

    searchPolls(){
        console.log(this.input.key)
        this.displaypolls = this.polls.filter(poll => {
            return poll.question.toLowerCase().includes(this.input.key.toLowerCase())
        })
    }
    // This function runs whent the search button is hit and then filters
    // our polls variable based on the search and the polls which match are then kept in
    // displaypolls
}
