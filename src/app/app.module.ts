import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire';

export const firebaseConfig = {
    apiKey: "AIzaSyDYWUzvbegHDMUSDfDifW8VekKMMrRklsI",
    authDomain: "agenciaviajes-lighthouse.firebaseapp.com",
    databaseURL: "https://agenciaviajes-lighthouse.firebaseio.com",
    projectId: "agenciaviajes-lighthouse",
    storageBucket: "agenciaviajes-lighthouse.appspot.com",
    messagingSenderId: "57155122940"
  };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
