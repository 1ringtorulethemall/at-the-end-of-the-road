import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-home-carousel',
  templateUrl: './home-carousel.component.html',
  providers: [NgbCarouselConfig]
})
export class HomeCarouselComponent {

  constructor(config: NgbCarouselConfig) {
    // custom
    config.interval = 15000;
    config.wrap = true;
    config.keyboard = true;
  }
}
/*
export class HomeCarouselComponent{

}*/
