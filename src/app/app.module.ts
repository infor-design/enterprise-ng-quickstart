import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SohoComponentsModule } from '@infor/sohoxi-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SohoComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
