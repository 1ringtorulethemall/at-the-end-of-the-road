import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {SeasonService} from '../../shared/seasons/season.service';
import {TextService} from '../../shared/texts/text.service';

@Component({
  selector: 'sejour-cuisine',
  templateUrl: './sejour-cuisine.component.html'
})

export class SejourCuisineComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isWinter: boolean;

  datas: any = ''; // no initialization = error
  pictures: picture[];
  errorMessage: string;

  constructor(private seasonService: SeasonService, private _textService: TextService) {
    // subscribe to seasons Changes
    this.subscription = this.seasonService.getMessage().subscribe(message => {
      this.isWinter = message.isWinter_;
    });
  }

  ngOnInit(): void {
    this.isWinter = this.seasonService.isWinter();
    this.getText();
  }

  getText() {
    this._textService.getText('sjGallery').subscribe(datas => {
        this.datas = datas;
        this.pictures = datas.pictures;
      }
      , error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  toggleVue(i: number): void {
    this.pictures[i].outsideViewEnabled = !this.pictures[i].outsideViewEnabled;
  }

}

interface picture {
  img: string;
  w_imgSummerView?: string; //window
  w_imgWinterView?: string; //window
  d_imgSummerView?: string; //door
  d_imgWinterView?: string; //door
  outsideViewEnabled: boolean;
  title: string;
  comment: string;
}
