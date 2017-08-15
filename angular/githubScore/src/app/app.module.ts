import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { TaskService } from './task.service';
// MUST import the service to be used and the Http Module to
// make http requests


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TaskService],
  // MUST add the service as a provider so it can be used across
  // the application
  bootstrap: [AppComponent]
})
export class AppModule { }
