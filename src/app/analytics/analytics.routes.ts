
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalyticsLandingComponent } from './components/analytics-landing/analytics-landing.component';
import { AnalyticsDeepComponent } from './components/analytics-deep/analytics-deep.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "deep",
   
  }
,
{
    path: 'deep',
    component: AnalyticsDeepComponent,
  }
,
{
    path: 'landing',
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
