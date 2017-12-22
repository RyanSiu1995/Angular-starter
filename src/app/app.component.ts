import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger(
      'sidebarani',
      [
        transition(
        ':enter', [
          style({
            transform: 'translateX(100%)',
            opacity: 0
          }),
          animate('150ms', style({
            transform: 'translateX(0)',
            'opacity': 1
          }))
        ]
      ),
      transition(
        ':leave', [
          style({
            transform: 'translateX(0)',
            'opacity': 1
          }),
          animate('150ms', style({
            transform: 'translateX(100%)',
            'opacity': 0
          }))
        ]
      )]
    )
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sidebar: boolean;

  constructor(private navBar: NavbarService) {
    this.navBar.sidebarobser.subscribe(res => {
      this.sidebar = res;
    });
  }
}
