import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideOptionsComponent } from './side-options.component';
import { PrimaryOptionsComponent } from './primary-options/primary-options.component';
import { SecondaryOptionsComponent } from './secondary-options/secondary-options.component';
import { CommonOptionsComponent } from './common-options/common-options.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideOptionsComponent, PrimaryOptionsComponent, SecondaryOptionsComponent, CommonOptionsComponent],
  exports: [SideOptionsComponent, PrimaryOptionsComponent, SecondaryOptionsComponent, CommonOptionsComponent]
})
export class SideOptionsModule { }
