import { Component } from '@angular/core';
import { WeatherService } from '../Service/weather.service';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
weatherData:any;
Cities=[]
cityname : string=""
temp;
min;
max;
  constructor(public weatherservice:WeatherService) {

  }
  getLocation(){
     
    this.weatherservice.updateWeather(this.cityname).subscribe((data)=>{
      this.weatherData=data;
      console.log(this.weatherData);
      this.temp=Math.round(this.weatherData.main.temp - 273.25);
      this.min=Math.round(this.weatherData.main.temp_min - 273.25);
      this.max=Math.round(this.weatherData.main.temp_max - 273.25)
    })
  }

}
