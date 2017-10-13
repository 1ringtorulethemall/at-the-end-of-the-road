import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';

@Component({
  selector: 'global-gallery',
  templateUrl: './global-gallery.component.html'
})
export class GlobalGalleryComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isWinter: boolean;

  constructor(private seasonService: SeasonService) {
    // subscribe to seasons Changes
    this.subscription = this.seasonService.getMessage().subscribe(message => {
    this.isWinter= message.isWinter_;
    });
  }

  ngOnInit(): void {
    this.isWinter = this.seasonService.isWinter();
    //console.log("ngOnInit isWinter=" + this.isWinter);
  }

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

// TODO: éliminer doublons au chargement
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


}

interface picture {
  img: string
  imgWinterView?: string;
}
