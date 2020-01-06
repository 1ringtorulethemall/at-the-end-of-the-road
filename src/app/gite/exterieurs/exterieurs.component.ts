import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {SeasonService} from '../../shared/seasons/season.service';
import {TextService} from '../../shared/texts/text.service';

@Component({
  selector: 'exterieurs',
  templateUrl: './exterieurs.component.html'
})
export class ExterieursComponent implements OnInit, OnDestroy {

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
    this._textService.getText('extGallery').subscribe(datas => {
        this.datas = datas;
        this.pictures = datas.pictures;
      }
      , error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  /*local
    pictures : picture[]=[
    {
      img :'assets/images/gite/exterieurs/SAM_3033-1024x768.jpg',
      title:'Vue générale du gîte',
      comment:'Le gîte est au premier étage. Au dessous, la cave permet de ranger ses skis ou ses vélos.'
    },
    {
      img :'assets/images/gite/exterieurs/SAM_30431-1024x768.jpg',
      title:'Le jardin',
      comment:"Le gîte dispose d'un petit jardin avec barbecue, table d'extérieur et parasol."
    },
    {
      img :'assets/images/gite/exterieurs/SAM_3039-1024x768.jpg',
      title:'Vue du jardin depuis le parking',
      comment:'Au fond, notre jardin.'
    },
    {
      img :'assets/images/gite/exterieurs/dsc_6234.jpg',
      title:'Le balcon',
      comment:'Le large balcon orienté sud est très agréable en toute saison'
    },
    {
      img :'assets/images/gite/exterieurs/SAM_3044-1024x768.jpg',
      title:'Le parking',
    },
    {
      img :'assets/images/gite/exterieurs/SAM_3029-1024x768.jpg',
      imgWinterView:'assets/images/gite/exterieurs/DSC_0670.jpg',
      title:'Le parking',
    }
  ]
  */


}


interface picture {
  img: string
  imgWinterView?: string;
  title: string;
  comment?: string;
}
