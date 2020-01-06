import {Component, OnInit} from '@angular/core';
import {ModalService} from './modal.service';

import {TextService} from './texts/text.service';


@Component({
  selector: 'ngbd-modal1',
  template: `
      <!-- TODO:  navbarCollapsed = true not effective-->
      <button class="btn btn-lg btn-outline-primary"
              (click)="open()"
              role="button"
              angulartics2On="click"
              angularticsCategory="contact"
              angularticsAction="open"
              [angularticsProperties]="{label:'from home/tarifsDispos'}">
          <em class="fa fa-paper-plane-o fa-fw" aria-hidden="true"></em>{{btnTxt}}
      </button>
  `
})
export class NgbdModal1 implements OnInit {

  constructor(private modalService: ModalService, private _textService: TextService) {
  }

  btnTxt: string;
  errorMessage: string;

  ngOnInit(): void {
    this.getText();
  }

  getText() {
    this._textService.getText('tarifsDispos').subscribe(datas => {
        this.btnTxt = datas.contactBtn;
      }
      , error => this.errorMessage = <any>error);
  }

  open() {
    this.modalService.showModal();
  }

}

@Component({
  selector: 'ngbd-modal2',
  template: `
      <a class="nav-link" (click)='open()' role="button" [routerLink]="" angulartics2On="click" angularticsCategory="contact"
         angularticsAction="open"
         [angularticsProperties]="{label:'from nav'}"><em class="fa fa-paper-plane fa-fw" aria-hidden="true"></em>{{btnTxt | uppercase}}</a>
  `
  // NOTE: [routerLink]="" allows to show handcursor
})

export class NgbdModal2 implements OnInit {

  constructor(private modalService: ModalService, private _textService: TextService) {
  }

  btnTxt: string;
  errorMessage: string;

  ngOnInit(): void {
    this.getText();
  }

  getText() {
    this._textService.getText('main').subscribe(datas => {
        this.btnTxt = datas.nav[4].item;
      }
      , error => this.errorMessage = <any>error);
  }

  open() {
    this.modalService.showModal();
  }

}
