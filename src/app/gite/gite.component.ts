import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './gite.component.html'
})
export class GiteComponent {

  //gestion vues fenêtres
  showOutside: boolean = false;
  toggleVue(): void {
    console.log('toggleVue clicked');
    this.showOutside = !this.showOutside;
  }

}
