import { Component} from '@angular/core';
import { ModalService } from './modal.service';


@Component({
  selector: 'ngbd-modal1',
  template: `
  <!-- TODO:  navbarCollapsed = true not effective-->
  <button class="btn btn-lg btn-outline-primary" (click)="open()" role="button"><em class="fa fa-paper-plane-o fa-fw" aria-hidden="true"></em>Nous contacter pour réserver</button>
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
  <a class="nav-link" (click)='open()' role="button" [routerLink]=""><em class="fa fa-paper-plane fa-fw" aria-hidden="true"></em>CONTACT</a>
  `
  // NOTE: [routerLink]="" allows to show handcursor
})

export class NgbdModal2 {

  constructor(private modalService: ModalService) {}

  open() {
    this.modalService.showModal();
  }

}
