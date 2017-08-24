import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // This route shows the login form

  { path: 'dashboard', component: DashboardComponent },
  // This route is the user's main dashboard

  { path: 'create', component: CreateComponent },
  // This route displays the create-a-poll page

  { path: 'poll/:id', component: PollComponent }
  // This route shows an individual poll's page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
