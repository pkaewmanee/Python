import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewData, InsertAnime } from 'src/models/data.model';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public review$: Observable<ReviewData>;
  public inputUser: String;
  public inputUserRating: Float32Array;
  public inputUserReview: String;

  public anime$: Observable<InsertAnime>;
  public inputAnime: String;
  public inputFormat: String;
  public inputEpisodes: Int32Array;
  public inputAnimeRating: Float32Array;
  public inputAnimeGenre: String;
  public date: String;

  constructor(private dataProvider: DataProviderService) {}

  insertReview(){
    this.review$= this.dataProvider.insertReview(this.inputUser, this.inputUserRating, this.inputUserReview);
  }

  insertAnime(){
    this.anime$= this.dataProvider.insertAnime(this.inputAnime, this.inputFormat, this.inputEpisodes, this.inputAnimeRating, this.inputAnimeGenre, this.date);
  }
}
