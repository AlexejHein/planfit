import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from '@angular/material/button';
import { HomePage } from './features/home/home-page/home-page';
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from '@angular/material/card';

@NgModule({
  declarations: [
    App,
    HomePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
