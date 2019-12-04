import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private BASE_URL:string = environment.api_base_url;
  private resSubject = new Subject();

  private headers = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  user:any;
  

  constructor(private http: HttpClient) { }

  getCollection(){
    
    return this.http.get<{ [key: string]: Country }>(`${this.BASE_URL}collection.json`, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    })
    .pipe(
      map(res => {
        console.log(res)
        const country:Country[] = [];
        for(const key in res) {
          if (res.hasOwnProperty(key)) {
            country.push({ ...res[key], id: key });
          }
        }
        return country;
      }),
      catchError(err => {
        const error = {
          message: 'fetching failed',
          error: err
        }
        return throwError(error);
      })
    );
  }

  fetchSingleCountry(id){
    return this.http.get(`${this.BASE_URL}collection/${id}.json`)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  postCollection(code:number, name:string, sport:string, available:boolean){
    const country:Country = { 
      name: name, 
      code: code, 
      sport: sport, 
      available: available 
    };
    return this.http.post<{name: string}>(`${this.BASE_URL}collection.json`, country , this.headers);
  }

 

}
