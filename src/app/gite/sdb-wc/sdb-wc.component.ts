import { Component,OnInit } from '@angular/core';

import { TextService } from "../../shared/texts/text.service";

@Component({
  selector: 'sdb-wc',
  templateUrl: './sdb-wc.component.html'
})
export class SdbWcComponent implements OnInit {

  constructor( private _textService: TextService) {}

  datas: any = ""; // no initialization = error
  pictures: picture[];
  errorMessage: string;

  ngOnInit(): void {
    this.getText();
  }

  getText() {
    this._textService.getText("sdbGallery").subscribe(datas => {
      this.datas = datas;
      this.pictures = datas.pictures;
    }
      , error => this.errorMessage = <any>error);
  }

/*local
  pictures: picture[] = [
    {
      img: "assets/images/gite/sdb-wc/dsc_6226.jpg",
      title: 'Salle de bain et toilettes',
      comment: "Elles sont situées entre les deux chambres",
    },
    {
      img: "assets/images/gite/sdb-wc/dsc_6231.jpg",
      title: 'La salle de bain',
      comment: "Elle est équipée d'une grande baignoire",
    },
    {
      img: "assets/images/gite/sdb-wc/dsc_6230.jpg",
      title: 'La salle de bain',
      comment: 'On y trouve aussi le lave-linge, de très nombreux porte-vêtements et un chauffage sèche-serviette',
    }
  ]
  */

}

interface picture {
  img: string;
  title: string;
  comment: string;
}
