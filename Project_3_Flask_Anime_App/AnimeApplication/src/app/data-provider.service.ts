import { Injectable } from '@angular/core';
import { Data, ReviewData, InsertAnime } from 'src/models/data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  constructor(public http:HttpClient) {}
    
    getTop10(g: String){
      return this.http.get<Data>("http://c789-35-196-166-127.ngrok.io/gettop10?genre="+g)
    }

    getLongest(l: String){
      return this.http.get<Data>("http://c789-35-196-166-127.ngrok.io/getlongest?genre="+l)
    }

    insertReview(user: String, userrating: Float32Array, review: String){
      return this.http.get<ReviewData>("http://c789-35-196-166-127.ngrok.io/insertreviews?username="+user+"&userrating="+userrating+"&review="+review)
    }

    insertAnime(anime: String, format: String, episodes: Int32Array, insertrating: Float32Array, insertgenre: String, date: String){
      return this.http.get<InsertAnime>("http://c789-35-196-166-127.ngrok.io/insertanime?anime="+anime+"&format="+format+"&episodes="+episodes+"&rating="+insertrating+"&genre="+insertgenre+"&date="+date)
    }

  }