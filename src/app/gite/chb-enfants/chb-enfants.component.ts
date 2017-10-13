import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';

@Component({
  selector: 'chb-enfants',
  templateUrl: './chb-enfants.component.html'
})

export class ChbEnfantsComponent  implements OnInit, OnDestroy {

    subscription: Subscription;
    isWinter: boolean;

    constructor(private seasonService: SeasonService) {
      // subscribe to seasons Changes
      this.subscription = this.seasonService.getMessage().subscribe(message => {
      this.isWinter= message.isWinter_;
      });
    }

    ngOnDestroy() {
          // unsubscribe to ensure no memory leaks
          this.subscription.unsubscribe();
      }

    ngOnInit(): void {
      this.isWinter = this.seasonService.isWinter();
    }

    //gestion vues fenêtres
    toggleVue(i: number): void {
      this.pictures[i].outsideViewEnabled = !this.pictures[i].outsideViewEnabled
    }

    pictures: picture[] = [
      {
        img: 'assets/images/gite/chambre-enfants/05260030.jpg',
        // TODO: window + door
        d_imgSummerView: 'assets/images/gite/chambre-enfants/f-chb-enfants-ete.jpg.jpg',
        d_imgWinterView: 'assets/images/gite/chambre-enfants/f-chb-enfants-hiver.jpg',
        outsideViewEnabled: false,
        title: '2 couchages superposés 90x200 et un lit tiroir optionnel',
        comment: 'Nous pouvons fournir le linge de lit sur demande',
      },
      {
        img: 'assets/images/gite/chambre-enfants/05260026.jpg',
        outsideViewEnabled: false,
        title: "De nombreux rangements d'époque sont prévus dans les murs intérieurs",
        comment: 'Vous trouverez aussi livres de poches, bds et magazines',
      },
      {
        img: "assets/images/gite/chambre-enfants/05260027.jpg",
        outsideViewEnabled: false,
        title: 'Blabla bla',
        comment: 'Blabla bla',
      }
    ]

}


interface picture {
  img: string;
  d_imgSummerView?: string; //window
  d_imgWinterView?: string; //window
  outsideViewEnabled: boolean;
  title: string;
  comment: string;
}
