import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import {SohoButtonModule, SohoComponentsModule, SohoLocaleModule} from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        SohoLocaleModule,
        SohoButtonModule,
        SohoLocaleInitializerModule,
        SohoComponentsModule
    ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ar-EG'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
