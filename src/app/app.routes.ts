import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
  { path: 'Home', component: HomeComponent},
  {path: 'Search', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
