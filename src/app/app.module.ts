import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchLatLongComponent } from './search-lat-long/search-lat-long.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SearchIdComponent,
    SearchLatLongComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
