import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})


export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
public data;
  constructor(private http: HttpClient) { }
  search(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`  ;
     this.http.get(apiURL).subscribe(response => {
      this.data = response['results'];
      console.log(this.data)
     
  });
  console.log(this.data)
  return this.data;
  }
}
