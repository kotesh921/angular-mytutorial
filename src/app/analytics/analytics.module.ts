import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsLandingComponent} from './components/analytics-landing/analytics-landing.component';
import { AnalyticsRoutingModule} from './analytics.routes' ;
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnalyticsLandingComponent]
})
export class AnalyticsModule { }