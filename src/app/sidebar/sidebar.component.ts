import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public setOfRoute = [
    {url: 'home', name: 'Home'},
    {url: 'profile', name: 'Profile'}
  ];

  constructor(public navbar: NavbarService) { }

  ngOnInit() {
  }

}
