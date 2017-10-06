import { Component } from '@angular/core';

@Component({
  selector: 'infos-pratiques',
  templateUrl: './infos-pratiques.component.html'
})

export class InfosPratiquesComponent {

  showList: boolean = false;

  //toggle vue complète des équipements
  toggleList(): void {
    this.showList = !this.showList;
    console.log('tac');
  }

}
