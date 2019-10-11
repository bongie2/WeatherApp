import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
Cities=[];
cityname : string="";
  constructor(public http:HttpClient) { }
  updateWeather(cityname){
return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+ cityname + "&APPID=8fadad42fb477e530ae74d73c8776e8f")

  }
  SearchWeather(){
    return this.Cities;
  }
}
