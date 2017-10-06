import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './acces.component.html'
})
export class AccesComponent {

  showMap: boolean = false;
  toggleMap(): void {
    this.showMap = !this.showMap;
  }

}
