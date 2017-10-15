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
        img: 'assets/images/gite/chambre-enfants/dsc_6218.jpg',
        outsideViewEnabled: false,
        title: '2 couchages superposés 90x200 et un lit tiroir optionnel',
        comment: 'Nous pouvons fournir le linge de lit sur demande',
      },
      {
        img: "assets/images/gite/chambre-enfants/dsc_6222.jpg",
        d_imgSummerView: 'assets/images/gite/chambre-enfants/f-chb-enfants-ete.jpg',
        d_imgWinterView: 'assets/images/gite/chambre-enfants/f-chb-enfants-hiver.jpg',
        outsideViewEnabled: false,
        title: 'Accès au balcon',
        comment: '',
      },
      {
        img: "assets/images/gite/chambre-enfants/dsc_6212.jpg",
        outsideViewEnabled: false,
        title: 'Bds, livres de poches et jeux de société',
        comment: '',
      },
      {
        img: 'assets/images/gite/chambre-enfants/05260026.jpg',
        outsideViewEnabled: false,
        title: "De nombreux rangements ...",
        comment: '... sont prévus dans les murs intérieurs. On y trouve même de vieilles écritures à la sanguine !',
      },
      {
        img: "assets/images/gite/chambre-enfants/dsc_6216.jpg",
        d_imgSummerView: 'assets/images/gite/chambre-enfants/f-chb-enfants-ete.jpg',
        d_imgWinterView: 'assets/images/gite/chambre-enfants/f-chb-enfants-hiver.jpg',
        outsideViewEnabled: false,
        title: "Plafond d'époque",
        comment: 'Mais isolé du froid par le grenier (comme tout le gîte)',
      },
      {
        img: "assets/images/gite/chambre-enfants/dsc_6223.jpg",
        outsideViewEnabled: false,
        title: 'Au fond, la chambre parents',
        comment: 'À droite, les toilettes et la salle de bain',
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
