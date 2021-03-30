import { Injectable } from '@angular/core';
import {Movie} from './movie'
import { Movies } from './movieMockUp';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
//CRUD Operations
  getMovies():Movie[]{
    return Movies;
  }

}
