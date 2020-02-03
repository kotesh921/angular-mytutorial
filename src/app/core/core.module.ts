import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent, FooterComponent, NotfoundComponent],
  declarations: [NavbarComponent, FooterComponent, NotfoundComponent]
})
export class CoreModule { }
