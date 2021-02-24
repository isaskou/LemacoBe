import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/Layout/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { ServicesComponent } from './components/Pages/services/services.component';
import { ParkingComponent } from './components/Pages/parking/parking.component';
import { AboutComponent } from './components/Pages/about/about.component';
import { ActualitesComponent } from './components/Pages/actualites/actualites.component';
import { PhotosComponent } from './components/Pages/photos/photos.component';
import { ContactComponent } from './components/Pages/contact/contact.component';
import { Page404Component } from './components/Pages/page404/page404.component';
import { HomeBannerComponent } from './components/Pages/home/home-banner/home-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    HomeComponent,
    ServicesComponent,
    ParkingComponent,
    AboutComponent,
    ActualitesComponent,
    PhotosComponent,
    ContactComponent,
    Page404Component,
    HomeBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  exports:[
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
