import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient ) { }

  getData(listData: any,lineChart: any) {
    this.http.get('http://c5f8-34-122-77-7.ngrok.io/get_data').subscribe(data =>
    {
      for(let i=0;i<data['data'].length;i++) 
        listData.push(data['data'][i]);
      console.log(listData);
      lineChart.update(0);
      console.log(listData);
    }
    );
  }
}
