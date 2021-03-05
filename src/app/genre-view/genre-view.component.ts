import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetGenreService } from '../fetch-api-data.service';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.scss']
})
export class GenreViewComponent implements OnInit { /** variable reflects component here */
  genres: any[] = []; /** variable reflects component here, plural */
  loading = true;
  constructor(
    public fetchApiData: GetGenreService, /** variable reflects component here. Must import */
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getGenre(); /** variable reflects component here */
  }

  getGenre(): void { /** variable reflects component here */
    this.fetchApiData.getGenre().subscribe((resp: any) => { /** variable reflects component here */
        this.genres = resp; /** variable reflects component here, plural */
        this.loading = false;
        console.log(this.genres); /** variable reflects component here, plural */
        return this.genres; /** variable reflects component here, plural */
      });
    }
}
