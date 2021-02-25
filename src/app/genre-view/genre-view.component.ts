import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetGenreService } from '../fetch-api-data.service';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.scss']
})
export class GenreViewComponent implements OnInit {
  movies: any[] = [];
  loading = true;
  constructor(
    public fetchApiData: GetGenreService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

}
