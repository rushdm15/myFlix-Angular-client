import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDirectorService } from '../fetch-api-data.service';

@Component({
  selector: 'app-director-view',
  templateUrl: './director-view.component.html',
  styleUrls: ['./director-view.component.scss']
})
export class DirectorViewComponent implements OnInit {
  directors: any[] = [];
  loading = true;
  constructor(
    public fetchApiData: GetDirectorService,
    public dialog: MatDialog
    ) { }

ngOnInit(): void {
  this.getDirector();
}

getDirector(): void {
  this.fetchApiData.getDirector().subscribe((resp: any) => {
      this.directors = resp;
      this.loading = false;
      console.log(this.directors);
      return this.directors;
    });
  }
}
