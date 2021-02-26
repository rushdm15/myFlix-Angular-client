import { Component, OnInit } from '@angular/core';
import { GetFavoriteMoviesService } from '../fetch-api-data.service';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';
import { SynopsisViewComponent } from '../synopsis-view/synopsis-view.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.scss']
})
export class FavoritesViewComponent implements OnInit {
  movies: any[] = [];
  loading = true;
  constructor(
    public fetchApiData: GetFavoriteMoviesService,
    public dialog: MatDialog
    ) { }

ngOnInit(): void {
  this.getFavorites();
}

getFavorites(): void {
  this.fetchApiData.getFavoriteMovies().subscribe((resp: any) => {
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
  openSynopsisViewDialog(): void {
    this.dialog.open(SynopsisViewComponent, {
      width: '280px'
    });
  }
}
