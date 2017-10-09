import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'map-broissieux',
  templateUrl: './map-broissieux.component.html',
  providers: [AgmCoreModule]
})


export class MapBroissieuxComponent {
  mapTypeId: string = 'satellite'; //roadmap satellite hybrid terrain
  lat: number = 45.738109;
  lng: number = 6.124398;
  zoom: number = 18;

  markers: marker[] = [
    {
      lat: 45.738109,
      lng: 6.124398,
      nfoTitle: 'Le gîte du bout de la route',
        },
    {
      lat: 45.738782,
      lng: 6.141853,
      label: '.',
      nfoTitle:'La Halte des Bauges',
      nfoWindow: 'Boulangerie, patisserie, restaurant, épicerie de proximité et produits locaux... super accueil à 1mn'
    },
    {
      lat: 45.714118,
      lng: 6.105792,
      label: '.',
      nfoTitle:'Lescheraines',
      nfoWindow: 'Boulangerie, boucherie, fromagerie, chocolaterie, superette, commerces ... à 5mn'
    },
    {
      lat: 45.687888,
      lng: 6.134614,
      label: '.',
      nfoTitle:'Le Châtelard',
      nfoWindow: 'Carrefour contact, essence, boulangerie, pharmacie... à 10mn'
    }
  ]
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  nfoTitle: string;
  nfoWindow?: string;
}

/* sans snazzy-info-window on peut customiser le texte des markers avec
.gm-style div{color: #fff !important; font-weight: bold;}
 à  mettre dans style.css */
