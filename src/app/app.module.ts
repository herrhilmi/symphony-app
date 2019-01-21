import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ControllerComponent } from './controller/controller.component';

import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
	AppComponent,
    HomeComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
	OverlayModule,
	APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
