import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CinemaHallComponent} from './cinema-hall/cinema-hall.component';


const routes: Routes = [
  { path: '', redirectTo: '/cinema-hall', pathMatch: 'full'},
  { path: 'cinema-hall', component: CinemaHallComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
