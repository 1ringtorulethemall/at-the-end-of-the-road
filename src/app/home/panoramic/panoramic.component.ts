import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { SeasonService } from '../../shared/seasons/season.service';

@Component({
  selector: 'panoramic',
  templateUrl: './panoramic.component.html'
})
export class PanoramicComponent implements OnInit, OnDestroy {

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

  }
