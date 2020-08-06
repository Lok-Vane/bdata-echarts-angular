import { NgModule } from '@angular/core';
import { DataEchartsRoutingModule } from './bdata-echarts-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {
  HomeComponent,
  HeaderComponent,
  // EcBarAComponent,
  // EcLineBComponent,
  // EcPieCComponent,
  // EcBarDComponent,
  // EcLineEComponent,
  // EcPieFComponent,
  EcMapComponent,
  MyechartsComponent
} from './components';
// import '../../assets/lib/flexible.js';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    // EcBarAComponent,
    // EcLineBComponent,
    // EcPieCComponent,
    // EcBarDComponent,
    // EcLineEComponent,
    // EcPieFComponent,
    EcMapComponent,
    MyechartsComponent,
  ],
  imports: [
    DataEchartsRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
})
export class BdataEchartsModule { }
