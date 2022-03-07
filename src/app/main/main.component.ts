import { Component, OnInit } from '@angular/core';
import { Movie } from '../types';
import { MOVIES } from './../movies';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies:Movie[] = [];

  constructor(private movieService :MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies()
      .subscribe(movies => {
        this.movies = movies;
        // console.log(movies)
      });
  }

}
