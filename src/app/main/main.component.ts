import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movie1 = {
    "adult": false,
    "genre_ids": [
      16,
      35,
      10751,
      14
    ],
    "id": 568124,
    "original_language": "en",
    "original_title": "Encanto",
    "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    "popularity": 2872.237,
    "release_date": "2021-11-24",
    "title": "Encanto",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 4850,
    "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    "backdrop_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
