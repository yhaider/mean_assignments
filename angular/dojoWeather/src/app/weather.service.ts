import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
// Must import HTTP in order to make any
// HTTP requests

@Injectable()
export class WeatherService {

    cities = {
        dc: '4140963',
        burbank: '4885983',
        chicago: '4887398',
        seattle: '5809844',
        sanjose: '5392171',
        dallas: '4190598'
    }
    // Above are the city ids to access
    // them on the weather API

  constructor(private _http:Http) { }

  getWeather(city: string){
      return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.cities[city]}&units=imperial&appid=d18b2d9e5df1f3331c7209a0f93c3713`)
      .map(data => data.json())
      .toPromise();
  }
  // This takes in a city (which comes from route param [see city.component.ts])
  // and then makes an HTTP request to the API with the corresponding ID
}
