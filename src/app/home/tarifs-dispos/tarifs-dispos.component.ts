import { Component, OnInit } from '@angular/core';
import { TextService } from "../../shared/texts/text.service";

@Component({
  selector: 'tarifs-dispos',
  templateUrl: './tarifs-dispos.component.html'
})
export class TarifsDisposComponent implements OnInit {

  constructor(private _textService: TextService) { }

  availability: String[];
  errorMessage: string;

  ngOnInit() {
    this.getAvailability();
    this.getText();
  }

  getAvailability() {

    this._textService.getAvailability().subscribe(availability => {
      this.availability = availability;
      }
      , error => this.errorMessage = <any>error);

  }

  datas: any =""; // no initialization = error

  getText() {
    this._textService.getText("tarifsDispos").subscribe(datas => {
      this.datas = datas;
    }
            , error => this.errorMessage = <any>error);
  }

}
