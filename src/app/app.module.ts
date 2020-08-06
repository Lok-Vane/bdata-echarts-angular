import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BdataEchartsModule } from './bdata-echarts/bdata-echarts.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BdataEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
