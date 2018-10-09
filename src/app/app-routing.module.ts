import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SolidGaugeComponent } from './solidGauge/solidGauge.component';
import { OverviewComponent } from './overview/overview.component';

import { ActivitySolidGaugeComponent } from './activity-solid-gauge/activity-solid-gauge.component';
import { ActivitySolidGauge1Component } from './activity-solid-gauge1/activity-solid-gauge1.component';
import {SolidGauge1Component} from './solidGauge1/solidGauge1.component';


import { DynamicLineGraphComponent } from './dynamic-line-graph/dynamic-line-graph.component';
import {DynamicLineGraph1Component} from './dynamic-line-graph1/dynamic-line-graph1.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LoginComponent } from './login/login.component';
import { totalfieldsComponent } from './totalfields/totalfields.component';
import { TemperatureGuageComponent } from './temperatureguage/temperatureguage.component';
import { HumidityComponent } from './Humidity/humidity.component';
//import { SolidGuage2Component } from './solidGuage2/solidGuage2.component';


const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'solidGauge', component: SolidGaugeComponent },
  { path: 'solidGauge1', component: SolidGauge1Component },
  //{ path: 'solidGauge2', component: SolidGuage2Component },
  { path: 'totalfieldsComponent', component: totalfieldsComponent },
  { path: 'temperature', component: TemperatureGuageComponent },
  { path: 'humidity', component: HumidityComponent },
  { path: 'activityGauge', component: ActivitySolidGaugeComponent },
  { path: 'activityGauge1', component: ActivitySolidGauge1Component },
  { path: 'dynamicLine', component: DynamicLineGraphComponent },
  { path: 'dynamicLine1', component: DynamicLineGraph1Component },
  { path: 'forecast', component: ForecastComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
