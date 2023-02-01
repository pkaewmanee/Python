import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { myData } from 'src/models/data.model';
import { WeatherProviderService } from '../weather-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public data$: Observable<myData>;
  public district:String;
  public subdistrict:String;

  constructor(private dataProvider:WeatherProviderService) {}
    
  getWeatherData(){
      this.data$= this.dataProvider.getData(this.district, this.subdistrict);
    }
  }
