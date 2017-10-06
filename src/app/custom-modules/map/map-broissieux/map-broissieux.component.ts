import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'map-broissieux',
  templateUrl: './map-broissieux.component.html',
  providers: [AgmCoreModule]
})
export class MapBroissieuxComponent {
  mapTypeId: string = 'roadmap'; //roadmap satellite hybrid terrain (fonctionne pas - j' ai fixé   this.mapTypeId = 'satellite'  dans core.umds.js)
  lat: number = 45.738109;
  lng: number = 6.124398;
  zoom: number = 18;
  //http://plnkr.co/edit/YX7W20?p=preview

}
