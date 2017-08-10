import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms'; //
import { HttpModule } from '@angular/http';
import { MyComponentMiniComponent } from './my-component/src/app/my-component-mini/my-component-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponentMiniComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
