import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';


@Component({
  selector: 'sejour-cuisine',
  templateUrl: './sejour-cuisine.component.html'
})

export class SejourCuisineComponent implements OnInit, OnDestroy {



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
      img: "assets/images/gite/sejour-cuisine/dsc_6200.jpg",
      d_imgSummerView: 'assets/images/gite/sejour-cuisine/pf-entree-ete.jpg',
      d_imgWinterView: 'assets/images/gite/sejour-cuisine/pf-entree-hiver.jpg',
      outsideViewEnabled: false,
      title: 'La cuisine vue du séjour',
      comment: 'Une table pour 6 personnes et même plus, ...',
    },
    {
      img: "assets/images/gite/sejour-cuisine/dsc_6163.jpg",
      w_imgSummerView: 'assets/images/gite/sejour-cuisine/f-l-salon-ete.jpg',
      w_imgWinterView: 'assets/images/gite/sejour-cuisine/f-l-salon-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Le séjour vu de la cuisine',
      comment: 'Séjour et cuisine forment un espace de vie très chaleureux',
    },
    {
      img: "assets/images/gite/sejour-cuisine/dsc_6186.jpg",
      w_imgSummerView: 'assets/images/gite/sejour-cuisine/f-sm-salon-ete.jpg',
      w_imgWinterView: 'assets/images/gite/sejour-cuisine/f-sm-salon-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Le coin canapé',
      comment: 'Le canapé est convertible en lit 2 personnes 140x200 (couette chaude)',
    },
    {
      img: "assets/images/gite/sejour-cuisine/dsc_6193.jpg",
      d_imgSummerView: 'assets/images/gite/sejour-cuisine/pf-entree-ete.jpg',
      d_imgWinterView: 'assets/images/gite/sejour-cuisine/pf-entree-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Vue depuis le canapé',
      comment: "En arrière-plan, l'accès aux chambres et le poële pour l'hiver",
    },
    {
      img: "assets/images/gite/sejour-cuisine/dsc_6172.jpg",
      outsideViewEnabled: false,
      title: 'La cuisine',
      comment: 'De nombreux rangements du 18ème siècle sont intégrés dans les murs.',
    },
    {
      img: "assets/images/gite/sejour-cuisine/dsc_6183.jpg",
      w_imgSummerView: 'assets/images/gite/sejour-cuisine/f-l-salon-ete.jpg',
      w_imgWinterView: 'assets/images/gite/sejour-cuisine/f-l-salon-hiver.jpg',
      outsideViewEnabled: false,
      title: 'La cuisine',
      comment: "La liste complète des équipements est disponible en page d'accueil",
    }
  ];
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
