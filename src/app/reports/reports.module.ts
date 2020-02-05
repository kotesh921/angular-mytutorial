import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting/reporting.component';
import { ReportsRoutingModule } from './reports.routes';
import { CustomModule } from './../custom/custom.module';


@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CustomModule

  ],
  declarations: [ReportingComponent]
})
export class ReportsModule { }