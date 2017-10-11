import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';

@Component({
  selector: 'sejour-cuisine',
  templateUrl: './sejour-cuisine.component.html'
})

export class SejourCuisineComponent implements OnInit {

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
  //  this.isWinter = this.seasonService.isWinter();
    //console.log("ngOnInit isWinter=" + this.isWinter);
  }

  //gestion vues fenêtres
  toggleVue(i: number): void {
    this.pictures[i].outsideViewEnabled = !this.pictures[i].outsideViewEnabled
  }

  pictures: picture[] = [
    {
      img: "assets/images/gite/sejour-cuisine/05260031.jpg",
      // TODO: window + door
    //  w_imgSummerView: 'assets/images/gite/sejour-cuisine/f-entree-ete.jpg',
    //  w_imgWinterView: 'assets/images/gite/sejour-cuisine/f-entree-hiver.jpg',
      d_imgSummerView: 'assets/images/gite/sejour-cuisine/pf-entree-ete.jpg',
      d_imgWinterView: 'assets/images/gite/sejour-cuisine/pf-entree-hiver.jpg',
      outsideViewEnabled: false,
      title: 'La cuisine vue du séjour',
      comment: 'Une table pour 6 personnes et même plus, ...',
    },
    {
      img: "assets/images/gite/sejour-cuisine/06120024.jpg",
      w_imgSummerView: 'assets/images/gite/sejour-cuisine/f-l-salon-ete.jpg',
      w_imgWinterView: 'assets/images/gite/sejour-cuisine/f-l-salon-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Le séjour vu de la cuisine',
      comment: 'à droite le poële',
    },
    {
      img: "assets/images/gite/sejour-cuisine/05260033.jpg",
      w_imgSummerView: 'assets/images/gite/sejour-cuisine/f-sm-salon-ete.jpg',
      w_imgWinterView: 'assets/images/gite/sejour-cuisine/f-sm-salon-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Un grand séjour',
      comment: 'Un grand séjour',
    },
    {
      img: "assets/images/gite/sejour-cuisine/06120027.jpg",
      w_imgSummerView: 'assets/images/gite/sejour-cuisine/f-sm-salon-ete.jpg',
      w_imgWinterView: 'assets/images/gite/sejour-cuisine/f-sm-salon-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Le canapé',
      comment: 'Le canapé est convertible en lit 2 personnes 140x200 (couette chaude)',
    },
    {
      img: "assets/images/gite/sejour-cuisine/06120028.jpg",
      w_imgSummerView: 'assets/images/gite/sejour-cuisine/f-l-salon-ete.jpg',
      w_imgWinterView: 'assets/images/gite/sejour-cuisine/f-l-salon-hiver.jpg',
      outsideViewEnabled: false,
      title: 'Un grand séjour',
      comment: '  bla bla',
    },
    {
      img: "assets/images/gite/sejour-cuisine/06120025.jpg",
      outsideViewEnabled: false,
      title: 'la cuisine',
      comment: 'des rangements du 18ème siècle sont intégrés dans les murs',
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
