import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import {SohoButtonModule, SohoComponentsModule, SohoLocaleModule} from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { HeaderComponent } from './header/header.component';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalizeMenuComponent
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
      useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
