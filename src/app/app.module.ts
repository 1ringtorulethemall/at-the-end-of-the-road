import { NgModule, ViewChild, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';// destination ngbCollapse navbar (ng-bootstrap)
import { ModalService } from './shared/modal.service';
import { NgbdModal1 } from './shared/contact.component';
import { NgbdModal2 } from './shared/contact.component';

import {SeasonService} from './shared/seasons/season.service'

import { HomeComponent } from './home/home.component';
import { CarouselModule } from './custom-modules/carousel/carousel.module';
import { GlobalGalleryComponent } from './home/global-gallery/global-gallery.component';
import { InfosPratiquesComponent } from './home/infos-pratiques/infos-pratiques.component';
import { TarifsDisposComponent } from './home/tarifs-dispos/tarifs-dispos.component';

import { GiteComponent } from './gite/gite.component';
import { SejourCuisineComponent } from './gite/sejour-cuisine/sejour-cuisine.component';
import { ChbParentsComponent } from './gite/chb-parents/chb-parents.component';
import { ChbEnfantsComponent } from './gite/chb-enfants/chb-enfants.component';
import { SdbWcComponent } from './gite/sdb-wc/sdb-wc.component';
import { PlanComponent } from './gite/plan/plan.component';
import { ExterieursComponent } from './gite/exterieurs/exterieurs.component';

import { AccesComponent } from './acces/acces.component';
import { MapModule } from './custom-modules/map/map.module';


@NgModule({
  imports: [
    BrowserModule,
    CarouselModule,
    MapModule,
    NgbModule.forRoot(), // destination ngbCollapse navbar (ng-bootstrap)
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'gite', component: GiteComponent },
      { path: 'acces', component: AccesComponent },
      { path: "", redirectTo: 'home', pathMatch: "full" },//.com
      { path: "**", redirectTo: 'home', pathMatch: "full" }//page inexistante
    ])
  ],
  declarations: [AppComponent, HomeComponent, NgbdModal1, NgbdModal2, GlobalGalleryComponent, InfosPratiquesComponent, TarifsDisposComponent, GiteComponent, AccesComponent, SejourCuisineComponent, ChbParentsComponent, ChbEnfantsComponent, PlanComponent, ExterieursComponent, SdbWcComponent],
  bootstrap: [AppComponent],
  providers: [ModalService,SeasonService]
})

export class AppModule {

  // top page navigation
  // TODO: trouver comment naviguer vers un fragment #
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
