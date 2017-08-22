import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    private login = {
        username: "",
        email: ""
    }
    // This is where we save the information from
    // our sign in form

  constructor(
      private _us: UserService,
      private _router: Router
  ) { }
    // Inject our service and our router so we can
    // use them

  ngOnInit() {
  }

  signin(){
      this._us.signin(this.login)
      .then((data) => {
          this._router.navigateByUrl('/')
      })
      .catch((err) => console.log(err));
  }
  // This communicates with our UserService and
  // run the UserService function called signin()
  // passing in our login information
  // When we get back here, if we successfully got data,
  // we'll re-route to the homepage
  // Otherwise we'll just console.log(err)
}
