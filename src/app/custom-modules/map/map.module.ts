import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
// todo commented on 2020/01
//import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { MapBroissieuxComponent } from './map-broissieux/map-broissieux.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT7eQ4OnaopTrAasz0HwyPNRJ3Qo5mWms'
    }),
    // todo commented on 2020/01
   //AgmSnazzyInfoWindowModule
  ],
  declarations: [MapBroissieuxComponent],
  exports: [MapBroissieuxComponent]
})
export class MapModule { }
