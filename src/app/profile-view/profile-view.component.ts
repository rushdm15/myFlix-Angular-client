import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { FavoritesViewComponent } from '../favorites-view/favorites-view.component';
// import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  // openUserRegistrationDialog(): void {
  //   this.dialog.open(UserRegistrationFormComponent, {
  //     width: '280px'
  //   });
  // }
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
  openProfileViewDialog(): void {
    this.dialog.open(ProfileViewComponent, {
      width: '500px'
    });
  }
}
