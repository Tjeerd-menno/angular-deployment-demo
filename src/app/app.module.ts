import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppConfiguration, provideAppConfiguration } from './app-configuration';

import { AppComponent } from './app.component';
import { ConfigSpyComponent } from './config-spy/config-spy.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigSpyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AppConfiguration,
    {
      provide: APP_INITIALIZER,
      useFactory: provideAppConfiguration,
      deps: [AppConfiguration],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
