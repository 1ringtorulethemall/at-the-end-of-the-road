import { Component} from '@angular/core';
import { ModalService } from './modal.service';


@Component({
  selector: 'ngbd-modal1',
  template: `
  <!-- TODO:  navbarCollapsed = true not effective-->
  <button class="btn btn-lg btn-outline-primary"  (click)="open()">
  Nous contacter pour réserver
  </button>
  `
})
export class NgbdModal1 {

  constructor(private modalService: ModalService) { }

  open() {
    this.modalService.showModal();
  }

}

@Component({
  selector: 'ngbd-modal2',
  template: `
  <!-- TODO:  navbarCollapsed = true not effective  // me sort une erreur au ng build-->
  <!--<a class="nav-link" (click)='open();navbarCollapsed = true'>-->
  <a class="nav-link" (click)='open()'>
  CONTACT
  </a>
  `
})

export class NgbdModal2 {

  constructor(private modalService: ModalService) { }

  open() {
    this.modalService.showModal();
  }

}
