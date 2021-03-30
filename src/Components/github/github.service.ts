import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url:string ="https://api.github.com/users"

  getUser(name:string):Observable<User>{
      let userUrl= this.url + "/" + name;
      return this.http.get<User>(userUrl)
  }

  constructor(private http:HttpClient) { }
}
