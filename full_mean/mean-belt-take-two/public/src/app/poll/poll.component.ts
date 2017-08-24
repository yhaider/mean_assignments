import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {

    private name
    private subscription
    private options
    private pollid
    private poll: Object
    private voteoption
    // Declaring our variables

  constructor(
      private _ps: PollService,
      private _route: ActivatedRoute,
      private _router: Router,
      private _us: UserService
  ) { }
    // Injecting services and other packages required

  ngOnInit() {
      this.getID()

      this.subscription = this._route.paramMap
      .switchMap(params => this.pollid = params.get('id'))
      .subscribe()

      this.getOptions()
      this.getPoll()
  }
  // On page load, we want to run the getID(), getOptions(), and
  // the getPoll() functions listed below, and we also want to
  // grab the id in the route parameter and save it to our pollid
  // variable

  ngOnDestroy(){
      this.subscription.unsubscribe()
  }
  // Unsubscribing

  getOptions(){
      this._ps.getOptions(this.pollid)
      .then(options => this.options = options)
      .catch(err => console.log(err))
  }
  // This function will go to our poll service and run the getOptions()
  // function, passing in our pollid variable (which contains the id from the route)
  // and the we will either receive all of the options associated with that poll
  // (in which case we will save them to our options variable) or an error which
  // we will console.log

  getPoll(){
      this._ps.getPoll(this.pollid)
      .then(poll => this.poll = poll)
      .catch(err => console.warn(err))
  }
  // This function will go to our poll service and run the getPoll() function
  // which takes the pollid. Then it'll receive a response. If it is data (the poll
  // associated with the pollid), then we will set our poll variable to this incoming data
  // If its an error, then it'll console.warn the error

  vote(){
      this._ps.vote(this.voteoption)
      .then(data => {
          console.log(data);
          this.getOptions()})
      .catch(err => console.warn(err))
  }
  // The function will go to our poll service and run the vote() function,
  // passing in the option id. Then it will either receive a success message
  // in which case we will run our getOptions() function to retrieve the
  // updated data (like refreshing the page) or it will catch an error

  getID(){
        this._us.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/');
        })
    }
    // This function will go to the user service and run the
    // getID() function there, retrieve data (the user's name in this case)
    // and save it in our name variable or retrieve an error and navigate
    // back to the login page

    getOption(id){
        this._ps.getOption(id)
        .then(data => {
            this.voteoption = data;
            return this.vote()
        })
        .catch(err => console.log(err))
    }
    // This function will go to our poll service and run the getOption() function,
    // passing in the option's id. Then we will receive data (the option's info)
    // and save it to our voteoption variable. Otherwise we would get an error.

}
