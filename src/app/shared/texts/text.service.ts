import {throwError as observableThrowError, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TextService {

  constructor(private _httpClient: HttpClient) {
  }

  getAvailability(): Observable<any> {
    // todo 2020/01 subscribe here and create a repo
    return this._httpClient
      .get('assets/texts/fr/availability.json').pipe(
        map(response => response),
        catchError(this.handleError),);
  }

  getText(theme: string): Observable<any> {
    // todo 2020/01 subscribe here and create a repo
    return this._httpClient.get('assets/texts/fr/text.json',).pipe(
      map(response => response[theme]),
      //.do(data => console.log(data))
      catchError(this.handleError),);
  }

  private handleError(error: Response) {
    let message = `Error status code ${error.status} at ${error.url}`;
    return observableThrowError(message);
  }

}
