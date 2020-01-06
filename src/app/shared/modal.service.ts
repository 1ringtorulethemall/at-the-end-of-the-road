import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ModalService {

  constructor() {
  }

  subscription = new Subject();

  showModal() {
    this.subscription.next();
  }

}
