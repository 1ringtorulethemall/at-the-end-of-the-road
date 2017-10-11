import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable'

import { ModalService } from './shared/modal.service';

import { SeasonService } from './shared/seasons/season.service';
import { Season } from './shared/seasons/season';

@Component({
  moduleId: module.id,
  selector: 'gite-app',
  templateUrl: 'app.component.html'

})

export class AppComponent implements OnInit {

  navbarCollapsed = true;

  //subscription to display the contact modal
  @ViewChild('contact') modalContent: ElementRef;
  constructor(private modalService: ModalService, private ngbModal: NgbModal, private seasonService: SeasonService) {

    modalService.subscription.subscribe(() => {
      this.ngbModal.open(this.modalContent);
    });

  }

  //season choice (summer vs winter)
  seasons = this.seasonService.SEASONS; // data binding
  @ViewChild('seasonChoice') seasonChoiceContent: ElementRef;
  setSeason(): void {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static', // no backdrop click
      keyboard: false // no close by pressing ESC
    };

    this.ngbModal.open(this.seasonChoiceContent, ngbModalOptions).result.then((result) => {
      this.seasonService.setCurrentSeason(result);
    })
  }

  ngOnInit() {
    this.initiateTimer();// = workaround NOTE: Angular's limitation --> see https://github.com/ng-bootstrap/ng-bootstrap/issues/1604 so use of timer
    //this.setSeason();

  }

  timer = Observable.create(0, 1000);
  initiateTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(this.setSeason.bind(this), 1 * 1 * 1);
    // TODO: check kill timer
  }

}
