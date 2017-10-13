import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';

@Component({
  selector: 'chb-parents',
  templateUrl: './chb-parents.component.html'
})

export class ChbParentsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isWinter: boolean;

  constructor(private seasonService: SeasonService) {
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
  }

  //gestion vues fenêtres
  toggleVue(i: number): void {
    this.pictures[i].outsideViewEnabled = !this.pictures[i].outsideViewEnabled
  }

  pictures: picture[] = [
    {
      img: "assets/images/gite/chambre-parents/05260017.jpg",
      // TODO: window + door
      w_imgSummerView: 'assets/images/gite/chambre-parents/f-chb-parents-ete.jpg',
      w_imgWinterView: 'assets/images/gite/chambre-parents/f-chb-parents-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Un grand lit double 160x200',
      comment: 'Nous pouvons fournir le linge de lit sur demande',
    },
    {
      img: "assets/images/gite/chambre-parents/05260017-2.jpg",
      outsideViewEnabled: false,
      title: 'Blabla bla',
      comment: 'Blabla bla',
    },
    {
      img: "assets/images/gite/chambre-parents/05260017-3.jpg",
      outsideViewEnabled: false,
      title: 'Blabla bla',
      comment: 'Blabla bla',
    }
  ]

}

interface picture {
  img: string;
  w_imgSummerView?: string; //window
  w_imgWinterView?: string; //window
  outsideViewEnabled: boolean;
  title: string;
  comment: string;
}
