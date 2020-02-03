import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';

import { HomeRoutingModule } from './home.routes';

import { SideOptionsModule } from './../side-options/side-options.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideOptionsModule
  ],
  declarations: [HomeWelcomeComponent]
})
export class HomeModule { }
