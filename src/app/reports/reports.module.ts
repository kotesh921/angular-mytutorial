import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting/reporting.component';
import { ReportsRoutingModule } from './reports.routes';
import { CustomModule } from './../custom/custom.module';
import {CoreModule } from './../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CustomModule,
    CoreModule

  ],
  declarations: [ReportingComponent]
})
export class ReportsModule { }