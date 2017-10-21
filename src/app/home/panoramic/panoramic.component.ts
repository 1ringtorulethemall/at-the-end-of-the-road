import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';

import { TextService } from "../../shared/texts/text.service";

@Component({
  selector: 'panoramic',
  templateUrl: './panoramic.component.html'
})
export class PanoramicComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isWinter: boolean;

  datas: any =""; // no initialization = error
  errorMessage: string;

  constructor(private seasonService: SeasonService, private _textService: TextService) {
    // subscribe to seasons Changes
    this.subscription = this.seasonService.getMessage().subscribe(message => {
    this.isWinter= message.isWinter_;
    });
  }

  ngOnInit(): void {
    this.isWinter = this.seasonService.isWinter();
    this.getText();
  }

  getText() {
    this._textService.getText("panoramic").subscribe(datas => {
      this.datas = datas;
    }
            , error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  }
