import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: any = Date.now();
  current_zone: string = "EST";

  tzChange(change){
      if (change.timezone == "Clear"){
          this.current_zone = "EST";
      }
      else{
          this.current_zone = change.timezone;
          this.date = this.date.setHours(this.date.getHours() - change.offset)
      }
  }

}
