import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private user = {
            name: "",
        }
    // This is where the form will store
    // its input and this is the variable we will
    // send to the database to login a user

    private myerr

  constructor(
      private _us: UserService,
      private _router: Router
  ) { }

  ngOnInit() {
  }

  login(){
      this._us.login(this.user)
      .then(data => {
          console.log(data);
          this._router.navigateByUrl('/dashboard')
      })
      .catch(err => this.myerr = err)
  }
  // Occurs on the submit of the login form,
  // this function will run the login function on the user
  // service and pass to it the this.user variable
  // Then it either receives data (the user's name) or 
  // an error and deals with each appropriately

}
