import { Component,OnInit } from '@angular/core';

import { TextService } from "../../shared/texts/text.service";

@Component({
  selector: 'plan-interieur',
  templateUrl: './plan.component.html'
})
export class PlanComponent implements OnInit{

  constructor(private _textService: TextService) {}

  datas: any = ""; // no initialization = error
  errorMessage: string;

  ngOnInit(): void {
    this.getText();
  }

  getText() {
    this._textService.getText("plan").subscribe(datas => {
      this.datas = datas;
    }
      , error => this.errorMessage = <any>error);
  }

}
