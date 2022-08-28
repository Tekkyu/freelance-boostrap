import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { OffreComponent } from './offre/offre.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { Animation1Component } from './animation1/animation1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import {BlockUIModule} from 'primeng/blockui';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ServiceComponent,
    OffreComponent,
    ContactComponent,
    Animation1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    BlockUIModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
