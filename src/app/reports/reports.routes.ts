
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportingComponent } from './reporting/reporting.component';
import { CustomizeComponent } from './../custom/customize/customize.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingComponent,
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
export class ReportsRoutingModule { }
