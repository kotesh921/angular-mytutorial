
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalyticsLandingComponent } from './components/analytics-landing/analytics-landing.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsLandingComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AnalyticsRoutingModule { }
