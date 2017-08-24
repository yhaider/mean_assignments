import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PollService } from '../../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    private polls
    private name
    // Declaring variables

  constructor(
      private _ps: PollService,
      private _router: Router,
      private _us: UserService
  ) { }
  // Injecting necessary services, etc.

  @Input() set displaypolls(newpolls){
      this.polls = newpolls
  }
  // Taking in an input from the parent dashboard component
  // This parent-child relationship is in place so that the search
  // function can work


  ngOnInit() {
      this.getID()
  }
  // Running the getID() function on page load

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

  deletePoll(id){
      this._ps.deletePoll(id)
      .then(data => this._router.navigateByUrl('/create'))
      .catch((err) => console.warn(err))
  }
    // This function will go to the poll service and run the deletePoll function
    // which takes in an id (the id of the poll you want to delete) and then
    // it will retrieve data. If the data is not an error, it will navigate to the
    // create a poll page
}
