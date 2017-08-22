import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    private user

  constructor(
      private _us: UserService,
      private _router: Router
  ) { }

  ngOnInit() {
      let user = this._us.isloggedIn()
      if(user){
          this.user = user
      }
      else {
          this._router.navigateByUrl('/signin')
      }
      // On the page load, we're going to
      // check if there is someone logged in
      // by running the isloggedIn() function in
      // our UserService
      // If there is a user (in which case user would = the logged in
      // user's information), then we'll set our this.user to that user
      // Otherwise, user would've been null, so it'll redirect to the signin page
  }

}
