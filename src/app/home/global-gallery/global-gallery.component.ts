import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';

import { TextService } from "../../shared/texts/text.service";

@Component({
  selector: 'global-gallery',
  templateUrl: './global-gallery.component.html'
})
export class GlobalGalleryComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isWinter: boolean;

  datas: any = ""; // no initialization = error
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
    this._textService.getText("globalGallery").subscribe(datas => {
      this.datas = datas;
      this.pictures = datas.pictures;
    }
      , error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  /* local
  pictures : picture[]=[
  {
    img :'assets/images/home/gallery/exterieurs.jpg',
    imgWinterView:''
  },
  {
    img :'assets/images/home/gallery/sejour2.jpg',
    imgWinterView:''
  },
  {
    img :'assets/images/home/gallery/sejour3.jpg',
    imgWinterView:''
  },
  {
    img :'assets/images/home/gallery/sejour1.jpg',
    imgWinterView:''
  },
  {
    img :'assets/images/home/gallery/cuisine.jpg',
    imgWinterView:''
  },
  {
    img :'assets/images/home/gallery/chb-parents.jpg',
    imgWinterView:''
  },
  {
    img :'assets/images/home/gallery/chb-enfants.jpg',
    imgWinterView:''
  },
  {
    img :'assets/images/home/gallery/vue-ete.jpg',
    imgWinterView:'assets/images/home/gallery/vue-hiver.jpg'
  }

  ]
  */
}

interface picture {
  img: string
  imgWinterView?: string;
}
