import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../types';
import { MOVIES } from '../movies';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie?: Movie;
  acronymForLanguage: {[key: string]:string} = {"en":"English","fr":"French","ja":"Japanese"};

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe({
      next: (movie: Movie) => {
        this.movie = movie;
        this.movie.original_language = this.acronymForLanguage[this.movie.original_language] ?
        this.acronymForLanguage[this.movie.original_language] : this.movie.original_language;
      },
      error: (error: string) => {
        // TODO: ajouter un attribut error et lui assigner error, et l'afficher
        console.error(error);
      }
    });
  }

}
