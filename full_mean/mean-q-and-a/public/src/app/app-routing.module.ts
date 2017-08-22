import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  // Initial logging in
  { path: 'home', component: HomeComponent },
  // Home screen accessed after logging in
  { path: 'ask', component: AskComponent },
  // The form for asking another question
  { path: 'show/:id', component: ShowComponent },
  // Showing the question associated with the id
  // in the route params
  { path: 'answer/:id', component: AnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
