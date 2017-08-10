import { Component } from '@angular/core';

let randomizer = function(){
    var num = Math.floor((Math.random()*6)+1);
    if (num == 1){
        return "Black";
    }
    if (num == 2){
        return "#062f4f";
    }
    if (num == 3){
        return "#813772";
    }
    if (num == 4){
        return "#B82061";
    }
    if (num == 5){
        return "#6D7993";
    }
    if (num == 6){
        return "#9099A2";
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    colors = [
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
}
