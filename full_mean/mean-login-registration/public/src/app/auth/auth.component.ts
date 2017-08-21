import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    private loginuser: User = {
            email:"",
            password: ""
        }

    private registeruser: User = {
            fname: "",
            lname: "",
            age: 0,
            email:"",
            password: "",
            passwordconfirm: ""
        }

    error

  constructor(
      private _us: UserService
  ) { }

  ngOnInit() {
  }

  login(){
      this._us.login(this.loginuser)
      .then(data => console.log(data))
      .catch(err => {
          let myerr = JSON.parse(err._body);
          console.warn(myerr);
          this.error = myerr;
      })

  }

  register(){
      this._us.register(this.registeruser)
      .then(data => console.log(data))
      .catch(err => {
          let myerr = JSON.parse(err._body);
          console.warn(myerr);
          this.error = myerr;
      })
  }

}
