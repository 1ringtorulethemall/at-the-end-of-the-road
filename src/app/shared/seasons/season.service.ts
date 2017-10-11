import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

import { Season } from './season';


@Injectable()
export class SeasonService {

  SEASONS: Season[] = [
    { name: 'Été', isCurrent: false, },
    { name: 'Hiver', isCurrent: false, } // !! winter pos =1
  ]

  private subject = new Subject<any>();
  sendMessage(msge: boolean) {
    this.subject.next({ isWinter_: msge });
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  setCurrentSeason(result: string) {
    for (let s of this.SEASONS) {
      if (s.name == result) { s.isCurrent = true }
      else { s.isCurrent = false }
    }
    this.sendMessage(this.isWinter()); // season dispatch
  }

  isWinter(): boolean {
    let b: boolean = false;
    for (let s of this.SEASONS) {
      if (s.isCurrent && (this.SEASONS[1].name == s.name)) { b = true; break; }
    }
    return b;
  }

}
