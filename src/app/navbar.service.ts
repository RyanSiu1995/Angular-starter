import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavbarService {
  public sidebar = new BehaviorSubject<boolean>(false);
  public sidebarobser = this.sidebar.asObservable();

  constructor() { }

  public toggleSideBar() {
    this.sidebar.next(!this.sidebar.getValue());
  }

}
