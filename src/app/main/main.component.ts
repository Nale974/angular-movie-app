import { Component, OnInit } from '@angular/core';
import { MOVIES } from './../movies';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies = MOVIES;

  constructor() { }

  ngOnInit(): void {
  }

}
