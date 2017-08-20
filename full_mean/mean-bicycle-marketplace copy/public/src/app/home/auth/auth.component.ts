import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
// We import User from our interfaces

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    private loginuser: User = {
        email: "",
        password: ""
    }
    
    // Here we declare a private variable for loginuser and
    // and private variable from registeruser which are both
    // of type User (which we imported earlier for this purpose!)
    // These are what will grab the information from their specific
    // forms
    // While we did not entirely carry out this section,
    // we would do something very similar to what we did when adding in
    // bikes to our database
    // Please take a closer look at the listings component and its child components
    // as that will give you a better understanding of full MEAN and
    // where everything routes to and how our front end communicates with our
    // back end

    private registeruser: User = {
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        passwordconfirm:"",
    }
  constructor() { }

  ngOnInit() {
  }

}
