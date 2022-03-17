export class Movie {
    id!: number;
    title!: string;
    poster_path!: string;
    overview!: string;
    vote_average!: number;
    runtime!: number;
    release_date!: string;
    genres!: Array<{id: number, name: string}>;
    original_language!: string;
  }