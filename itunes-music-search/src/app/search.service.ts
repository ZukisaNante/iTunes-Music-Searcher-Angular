import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, empty } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl ="https://itunes.apple.com/search?";
  // "https://api.github.com/search/repositories" ;
  // "https://itunes.apple.com/search?"
  public searchResults: any;

// makes HTTP call to the api
public searchEntries(term): Observable<any>{
  if(term === ""){
    console.log('Not Defined');
    //return empty()
  }else{
    let params = {q: term}
    return this.httpClient.get(this.baseUrl, {params}).pipe(
      map(response =>{
        console.log(response);
        return this.searchResults = response['items']; 
      })
    );
  }
}

// returns the response
public _searchEntries(term){
  return this.searchEntries(term);
}

}
