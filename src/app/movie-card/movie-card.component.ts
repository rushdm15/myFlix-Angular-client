import { Component, OnInit } from '@angular/core';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  loading = true;
  constructor(public fetchApiData: GetAllMoviesService) { }

ngOnInit(): void {
  this.getMovies();
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.loading = false;
      console.log(this.movies);
      return this.movies;
    });
  }
  openGenreViewDialog(): void {
    this.dialog.open(GenreViewComponent, {
      width: '280px'
    });
  }
  openDirectorViewDialog(): void {
    this.dialog.open(DirectorViewComponent, {
      width: '280px'
    });
  }
}
