import {Component, ViewChild, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Subscription, Observable} from 'rxjs';
import {ModalService} from './shared/modal.service';
import {SeasonService} from './shared/seasons/season.service';
import {TextService} from './shared/texts/text.service';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';

@Component({
  moduleId: module.id,
  selector: 'gite-app',
  templateUrl: 'app.component.html'

})

export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isWinter: boolean;
  isSeasonChoosen: boolean = false;

  datas: any;
  errorMessage: string;

  navbarCollapsed = true;

  //subscription to display the contact modal
  @ViewChild('contact') modalContent: ElementRef;

  constructor(private modalService: ModalService, private ngbModal: NgbModal, private seasonService: SeasonService, private _textService: TextService, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {

    modalService.subscription.subscribe(() => {
      this.ngbModal.open(this.modalContent);
    });

    // subscribe to seasons Changes @nav leaf vs snowfake
    this.subscription = this.seasonService.getMessage().subscribe(message => {
      this.isWinter = message.isWinter_;
      if (this.isSeasonChoosen == false) {
        this.isSeasonChoosen = true;
      }
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
    });
  }

  ngOnInit() {
    this.initiateTimer();// = workaround NOTE: Angular's limitation --> see https://github.com/ng-bootstrap/ng-bootstrap/issues/1604 so use of timer
    //this.setSeason();

    this.getText();
  }

  timer = Observable.create(0, 1000);

  initiateTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(this.setSeason.bind(this), 1 * 1 * 1);
    // TODO: check kill timer
  }

  getText() {
    this._textService.getText('main').subscribe(datas => {
        this.datas = datas;
      }
      , error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
