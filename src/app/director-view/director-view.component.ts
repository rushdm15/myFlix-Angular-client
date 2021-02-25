import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetDirectorService } from '../fetch-api-data.service';

@Component({
  selector: 'app-director-view',
  templateUrl: './director-view.component.html',
  styleUrls: ['./director-view.component.scss']
})
export class DirectorViewComponent implements OnInit {
  movies: any[] = [];
  loading = true;
  constructor(
    public fetchApiData: GetDirectorService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

}
