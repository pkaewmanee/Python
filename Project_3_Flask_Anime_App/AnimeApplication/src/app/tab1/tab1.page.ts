import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/models/data.model';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public genre$: Observable<Data>;
  public genre$$: Observable<Data>;
  public inputGenre: String;
  public inputGenre$: String;

  constructor(private dataProvider: DataProviderService) {}

  getTop10(){
    this.genre$ = this.dataProvider.getTop10(this.inputGenre)
  }
  getLongest(){
    this.genre$$ = this.dataProvider.getLongest(this.inputGenre$)
  }
    
}
