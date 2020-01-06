import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';

@NgModule({
  imports: [ CommonModule,NgbModule.forRoot()],
  declarations: [HomeCarouselComponent],
  exports:[HomeCarouselComponent]
})

export class CarouselModule {
}
