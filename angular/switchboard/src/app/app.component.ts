import { Component } from '@angular/core';

let randomizer = function(){
    var chance = Math.floor((Math.random()*2)+1);
    if(chance == 1){
        return "ON";
    }
    if(chance == 2){
        return "OFF";
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    switchboard = [
        randomizer(),
        randomizer(),
        randomizer(),
        randomizer(),
        randomizer(),
        randomizer(),
        randomizer(),
        randomizer(),
        randomizer(),
        randomizer()
    ]

    flip(ind){
        if(this.switchboard[ind] === 'ON'){
            this.switchboard[ind] = 'OFF';
        }
        else if(this.switchboard[ind] === 'OFF'){
            this.switchboard[ind] = 'ON';
        }

    }
}
