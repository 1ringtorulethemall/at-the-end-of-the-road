import { Component, OnInit} from '@angular/core';
import { TextService } from "../../shared/texts/text.service";

@Component({
  selector: 'infos-pratiques',
  templateUrl: './infos-pratiques.component.html'
})

export class InfosPratiquesComponent implements OnInit{

  constructor(private _textService: TextService) { }

  showList: boolean = false;
  errorMessage: string;

  ngOnInit() {
    this.getText();
  }

  datas: any =""; // no initialization = error

  getText() {
    this._textService.getText("nfosPratiques").subscribe(datas => {
      this.datas = datas;
    }
            , error => this.errorMessage = <any>error);
  }

  //toggle vue complète des équipements
  toggleList(): void {
    this.showList = !this.showList;
    console.log('tac');
  }

}
