import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import{IBook} from './books';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TextService {

  constructor(private _http: Http) { }

  getAvailability(): Observable<String[]> {
    return this._http
      .get('assets/texts/fr/availability.json')
      .map((response: Response) => <String[]>response.json())
      //.do(data=>console.log(data))
      .catch(this.handleError);
  }

  getText(theme: string): Observable<any> {

    return this._http.get('assets/texts/fr/text.json', )
      .map((response: Response) => <any>response.json()[theme])
      //.do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);

  }

}
