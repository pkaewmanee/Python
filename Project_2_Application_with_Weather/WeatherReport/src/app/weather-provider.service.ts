import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { myData } from 'src/models/data.model'

@Injectable({
  providedIn: 'root'
})
export class WeatherProviderService {
  constructor(public http:HttpClient) { }

  getData(district:String, subdistrict:String){
    return this.http.get<myData>("http://1a34-35-196-170-136.ngrok.io/getweather?district="+district+"&subdistrict="+subdistrict)
  }
}
