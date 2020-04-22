import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }


  getSomeBeers() {
    return this.http.get('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
  }
  
}
