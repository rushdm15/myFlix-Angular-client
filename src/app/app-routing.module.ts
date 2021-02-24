import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {ProfileViewComponent} from './profile-view/profile-view.component';
import {FavoritesViewComponent} from './favorites-view/favorites-view.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'favorites', component: FavoritesViewComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
