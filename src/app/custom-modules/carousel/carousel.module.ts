import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';


// NOTE: comment créer un module :
//https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html

@NgModule({
  imports: [ CommonModule,NgbModule.forRoot()],
  declarations: [HomeCarouselComponent],
  exports:[HomeCarouselComponent]
})

export class CarouselModule {
}
