import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import { ChartDataService } from './chart-data.service';

import { AppComponent } from './app.component';
//import material animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// imports to use highcharts
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { SolidGaugeComponent } from './solidGauge/solidGauge.component';
import { SolidGauge1Component } from './solidGauge1/solidGauge1.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './overview/overview.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { SolidArcGaugeComponent } from './solid-arc-gauge/solid-arc-gauge.component';
import { ActivitySolidGaugeComponent } from './activity-solid-gauge/activity-solid-gauge.component';
import { ActivitySolidGauge1Component } from './activity-solid-gauge1/activity-solid-gauge1.component';
import { DynamicLineGraphComponent } from './dynamic-line-graph/dynamic-line-graph.component';
import { DynamicLineGraph1Component} from './dynamic-line-graph1/dynamic-line-graph1.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LoginComponent } from './login/login.component';
import { totalfieldsComponent } from './totalfields/totalfields.component';
import { TemperatureGuageComponent } from './temperatureguage/temperatureguage.component';
import { HumidityComponent } from './Humidity/humidity.component';
//import { SolidGuage2Component } from './solidGuage2/solidGuage2.component';




export function highchartsfactory() {
  const hc = require('highcharts');
  window['highCharts'] = hc;
  const hcm = require('highcharts/highcharts-more');
  const sg = require('highcharts/modules/solid-gauge');
  hcm(hc);
  sg(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    SolidGaugeComponent,
    SolidGauge1Component,
    HumidityComponent,
    totalfieldsComponent,
    //SolidGuage2Component,
    OverviewComponent,
    TemperatureGuageComponent,
    //SolidArcGaugeComponent,
    ActivitySolidGaugeComponent,
    ActivitySolidGauge1Component,
    DynamicLineGraphComponent,
    DynamicLineGraph1Component,
    ForecastComponent,

    LoginComponent,

   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    {
     provide: HighchartsStatic,
     useFactory: highchartsfactory
   },
   ChartDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
