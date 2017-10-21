import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';

import { TextService } from "../../shared/texts/text.service";

@Component({
  selector: 'chb-parents',
  templateUrl: './chb-parents.component.html'
})

export class ChbParentsComponent implements OnInit, OnDestroy {

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

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isWinter = this.seasonService.isWinter();
    this.getText();
  }

  getText() {
    this._textService.getText("chbParGallery").subscribe(datas => {
      this.datas = datas;
      this.pictures = datas.pictures;
    }
      , error => this.errorMessage = <any>error);
  }

  //gestion vues fenêtres
  toggleVue(i: number): void {
    this.pictures[i].outsideViewEnabled = !this.pictures[i].outsideViewEnabled
  }
/*local
  pictures: picture[] = [
    {
      img: "assets/images/gite/chambre-parents/05260017.jpg",
      w_imgSummerView: 'assets/images/gite/chambre-parents/f-chb-parents-ete.jpg',
      w_imgWinterView: 'assets/images/gite/chambre-parents/f-chb-parents-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Un grand lit double 160x200',
      comment: 'Nous pouvons fournir le linge de lit sur demande',
    },
    {
      img: "assets/images/gite/chambre-parents/dsc_6206.jpg",
      w_imgSummerView: 'assets/images/gite/chambre-parents/f-chb-parents-ete.jpg',
      w_imgWinterView: 'assets/images/gite/chambre-parents/f-chb-parents-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Blabla bla',
      comment: 'Blabla bla',
    },
    {
      img: "assets/images/gite/chambre-parents/dsc_6205.jpg",
      outsideViewEnabled: false,
      title: 'Blabla bla',
      comment: 'Blabla bla',
    }
  ]
  */

}

interface picture {
  img: string;
  w_imgSummerView?: string; //window
  w_imgWinterView?: string; //window
  outsideViewEnabled: boolean;
  title: string;
  comment: string;
}
