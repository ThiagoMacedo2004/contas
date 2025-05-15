import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppAngularMaterialModule } from './shared/app-angular-material/app-angular-material.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuComponent,
    BrowserAnimationsModule,
    AppAngularMaterialModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
