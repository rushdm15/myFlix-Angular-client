import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { FavoritesViewComponent } from '../favorites-view/favorites-view.component';
import { EditUserService } from '../fetch-api-data.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  user: any[] = [];
  loading = true;
  constructor(
    public fetchApiData: EditUserService,
    public dialog: MatDialog
    ) { }
  ngOnInit(): void {
    this.editUser();
  }

  editUser(): void {
    this.fetchApiData.editUser().subscribe((resp: any) => {
        this.user = resp;
        this.loading = false;
        console.log(this.user);
        return this.user;
      });
    }
  openEditUserDialog(): void {
    this.dialog.open(ProfileViewComponent, {
      width: '280px'
    });
  }
  openFavoritesViewDialog(): void {
    this.dialog.open(FavoritesViewComponent, {
      width: '280px'
    });
  }
  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
      width: '500px'
    });
  }
  // openProfileViewDialog(): void {
  //   this.dialog.open(ProfileViewComponent, {
  //     width: '500px'
  //   });
  // }
}
