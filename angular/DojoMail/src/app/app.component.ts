import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
      {
          email: "yhaider@uchicago.edu",
          importance: "High",
          subject: "Internship Application",
          context: "Attached is my application..."
      },
      {
          email: "isuntag@gmail.com",
          importance: "High",
          subject: "Clarisonic Malfunction",
          context: "My clarisonic is not working..."
      },
      {
          email: "will@codingdojo.com",
          importance: "High",
          subject: "End of Day Goal",
          context: "Here are the end of day goals..."
      },
  ]
  // The above are emails to be displayed on our route
  // They are in dictionaries so each piece of information
  // can be easily retrieved apart from the others
  // All are stored in an array so it can be looped through
}
