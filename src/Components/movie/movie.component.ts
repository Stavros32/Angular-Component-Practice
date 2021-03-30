import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movieMockUp';
import {MovieService} from './movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit, OnChanges, OnDestroy {
  Startmovies!: Movie[];
  FilteredMovies: Movie[] = this.Startmovies;
  SearchDirector: string = '';
  SearchTitle!: string;
  minYear: number = 1900;
  maxYear: number = new Date().getFullYear();
  HidePrice: boolean = true;
  borderRadiusImage: number = 90;
  maxWidth: number = 50;

  FilterMovies() {
    this.FilteredMovies = this.Startmovies;

    if (this.SearchDirector) {
      this.FilteredMovies = this.FilteredMovies.filter((x) =>
        x.director.toUpperCase().includes(this.SearchDirector.toUpperCase())
      );
    }
    if (this.SearchTitle) {
      this.FilteredMovies = this.FilteredMovies.filter((x) =>
        x.movieName.toUpperCase().includes(this.SearchTitle.toUpperCase())
      );
    }

    this.FilteredMovies = this.FilteredMovies.filter(
      (x) => x.year >= this.minYear && x.year <= this.maxYear
    );
  }
  
  TogglePrice() {
    this.HidePrice = !this.HidePrice;
  }
  ngOnDestroy(): void {
    console.log(' I Desroy');
  }
  ngOnChanges(): void {
    console.log('i Change');
  }
  ngOnInit(): void {
    this.Startmovies = this.service.getMovies();
    this.FilteredMovies= this.Startmovies;
  }
  constructor(private service:MovieService) {
    console.log('I am COnstructor');
  }
}
