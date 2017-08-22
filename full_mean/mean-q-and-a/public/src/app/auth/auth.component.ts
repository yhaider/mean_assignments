import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    private user = {
        name: "",
    }

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
          this._router.navigateByUrl('/home')
      })
      .catch(err => this.myerr = err)
  }

}
