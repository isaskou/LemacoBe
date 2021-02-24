import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/Pages/about/about.component';
import { ActualitesComponent } from './components/Pages/actualites/actualites.component';
import { ContactComponent } from './components/Pages/contact/contact.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { Page404Component } from './components/Pages/page404/page404.component';
import { ParkingComponent } from './components/Pages/parking/parking.component';
import { PhotosComponent } from './components/Pages/photos/photos.component';
import { ServicesComponent } from './components/Pages/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'parking', component: ParkingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: ActualitesComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
