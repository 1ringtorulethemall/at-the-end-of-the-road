import { Component,ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from './shared/modal.service';


@Component({
  moduleId: module.id,
  selector: 'gite-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {

  navbarCollapsed = true;

  //subscription to display the modal dialog
  @ViewChild('contact') modalContent: ElementRef;
    constructor(private modalService: ModalService, private ngbModal: NgbModal) {
        modalService.subscription.subscribe(() => {
          this.ngbModal.open(this.modalContent)
        })


    }

}
