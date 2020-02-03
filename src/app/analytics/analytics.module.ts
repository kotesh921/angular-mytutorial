import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsLandingComponent} from './components/analytics-landing/analytics-landing.component';
import { AnalyticsRoutingModule} from './analytics.routes' ;
import {SideOptionsModule} from './../side-options/side-options.module';
import { AnalyticsDeepComponent } from './components/analytics-deep/analytics-deep.component';


@NgModule({
  imports: [
    CommonModule, AnalyticsRoutingModule, SideOptionsModule
  ],
  declarations: [AnalyticsLandingComponent, AnalyticsDeepComponent]
})
export class AnalyticsModule { }