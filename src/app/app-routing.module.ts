import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OffreComponent } from './offre/offre.component';
import { ServiceComponent } from './service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'offre',            component: OffreComponent },
    { path: 'about',            component: AboutComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'service',          component: ServiceComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{
      useHash: true, scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled',onSameUrlNavigation: 'reload'
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
