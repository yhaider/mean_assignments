import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute} from '@angular/router';
// In order to use route params we must import the above

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

        weather: Object = {};
        subscription;
      constructor(private _weatherservice: WeatherService, private _route: ActivatedRoute) { }

      ngOnInit() {
          this.subscription = this.getWeather();
      }

      getWeather(){
          this._route.paramMap
          .switchMap(params => {
              return this._weatherservice.getWeather(params.get('city')
          )})
          .subscribe(weather => this.weather = weather)
      }
      // This grabs the city from the route link itself since it is
      // a route parameter and goes to the service to run the function
      // getWeather which grabs the data
      // This section just feeds the function in weatherservice the city name, which comes from the
      // route parameter

      ngOnDestroy(){
          this.subscription.unsubscribe();
      }

}
