import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: '', redirectTo: '/dc', pathMatch: 'full' },
  { path: ':city', component: CityComponent },
];
// The above are the routes: the root route which automatically
// redirects to this dojo's city's information [Washington, D.C.]
// and the :city route which passes in city as a parameter which we
// use later on to pull the accurate corresponding information


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
