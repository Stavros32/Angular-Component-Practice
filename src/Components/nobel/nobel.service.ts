import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Complex } from './complexNobelModel';

@Injectable({
  providedIn: 'root'
})
export class NobelService {

  private url: string = "http://api.nobelprize.org/v1/prize.json?";

  getPrizes(): Observable<Complex> {
    return this.http.get<Complex>(this.url)
  }

  constructor(private http: HttpClient) { }
}
