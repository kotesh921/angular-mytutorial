import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsLandingComponent} from './components/analytics-landing/analytics-landing.component';
import { AnalyticsRoutingModule} from './analytics.routes' ;
import {SideOptionsModule} from './side-options/side-options.module';

@NgModule({
  imports: [
    CommonModule, AnalyticsRoutingModule, SideOptionsModule
  ],
  declarations: [AnalyticsLandingComponent]
})
export class AnalyticsModule { }