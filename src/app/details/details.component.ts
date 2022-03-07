import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../types';
import { MOVIES } from '../movies';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie?: Movie;

  constructor(private route: ActivatedRoute) { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = MOVIES.find(item => id === item.id);
    console.log(this.movie);
  }

  ngOnInit(): void {
  }

}
