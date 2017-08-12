import { Component } from '@angular/core';

class User {
    constructor(
        public fname: String = "",
        public lname: String = "",
        public email: String = "",
        public password: String = "",
        public passwordcon: String = "",
        public street: String = "",
        public unit: String = "",
        public city: String = "",
        public state: String = "",
        public lucky: Boolean = null,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  all_users = []
  new_user = null

  addUser(){
      console.log(this.new_user)
      this.new_user = this.user;
      this.all_users.push(this.user);
      this.user = new User();
      console.log(`${this.user.fname} has been registered.`)
  }

}
