import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
// Must import our service to use it


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private taskservice: TaskService) { }
  // Here we call for the TaskService and give it a name by
  // which we can refer to it Here

  ngOnInit() {
  }

  user = {
      username: '',
      data: [],
      score: '',
  };
  err = "";
  // Begins empty and then data is stored there when form is submitted


  getUser(username:string){
        this.taskservice.getUser(username)
        .then(
            (data)=>{
                this.user.data = data;
                this.user.score = data.followers+data.public_repos;
            }
        )
        .catch(err => this.err = err)
    }

    // Calls the getUser function defined in task service and pulls the data,
    // and stores in the empty variables we defined above
    // Also stores errors

    onSubmit(){
        this.getUser(this.user.username);
    }
    // This grabs the username and runs getUser above, which
    // routes us to the function in the service file
}
