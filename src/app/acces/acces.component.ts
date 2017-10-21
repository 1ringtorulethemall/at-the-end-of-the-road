import { Component,OnInit } from '@angular/core';

import { TextService } from "../shared/texts/text.service";

@Component({
  moduleId: module.id,
  templateUrl: './acces.component.html'
})

export class AccesComponent implements OnInit{

  constructor(private _textService: TextService) {}

  datas: any = ""; // no initialization = error
  errorMessage: string;

  ngOnInit(): void {
    this.getText();
  }

  getText() {
    this._textService.getText("acces").subscribe(datas => {
      this.datas = datas;
    }
      , error => this.errorMessage = <any>error);
  }

  showMap: boolean = false;
  toggleMap(): void {
    this.showMap = !this.showMap;
  }

}
