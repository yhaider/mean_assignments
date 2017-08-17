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
// This randomizer() function determines what the initial
// state of the switchboard is when the page is initially loaded
// This allows for more randomization and for the switchboard
// to not be the same each time it is loaded


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
    // Similar to the logic used in RetroBarcodeGenerator,
    // our initial switchboard calls the randomizer() function
    // for each switch so it changes each time the page is loaded

    flip(ind){
        if(this.switchboard[ind] === 'ON'){
            this.switchboard[ind] = 'OFF';
        }
        else if(this.switchboard[ind] === 'OFF'){
            this.switchboard[ind] = 'ON';
        }

    }
    // This pulls the button's index from the logic in our html
    // and if at that index, the button is 'ON', it becomes 'OFF'
    // and visa versa. CSS then changes the color of the button
}
