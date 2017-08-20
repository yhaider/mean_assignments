// This file is SUPER important!!

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// Here are the modules we import.
// BrowserModule, NgModule, and AppRoutingModule will
// all appear naturally if you set up your angular app with routing
// HOWEVER, you must import FormsModule for form usage and
// HttpModule for communication with APIs and our backend

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { AuthComponent } from './home/auth/auth.component';
import { BikeDashboardComponent } from './browse/bike-dashboard/bike-dashboard.component';
import { BikeDetailComponent } from './browse/bike-dashboard/bike-detail/bike-detail.component';
import { ListingsNewComponent } from './listings/listings-new/listings-new.component';
import { ListingsDashboardComponent } from './listings/listings-dashboard/listings-dashboard.component';
import { ListingComponent } from './listings/listings-dashboard/listing/listing.component';
// These are all of our components.
// They will automatically appear when you run the $ng g c [NAME] command
// HOWEVER, you must ensure they are being imported from the correct place
// when you are nesting components. Angular's system is notorious for messing
// this up!
// So, if you get an error in this section of your app modules, make sure that
// you are importing your module from the correct place

import { BikeService } from './services/bike.service';
// We must manually import our services.
// In this project, I have saved services in a folder together, so
// ensure that the routing is correct

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    ListingsComponent,
    AuthComponent,
    BikeDashboardComponent,
    BikeDetailComponent,
    ListingsNewComponent,
    ListingsDashboardComponent,
    ListingComponent
  ],
  // Here we have to announce our components
  // They will automatically appear here, but no harm in checking

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  // Here we will have to import our modules.
  // The ones that automatically generate will appear,
  // but any new ones must be added

  providers: [BikeService],
  // You have to add your services into here!
  // This enables them across our application and if
  // we do not do this, we cannot use them

  bootstrap: [AppComponent]
})
export class AppModule { }
