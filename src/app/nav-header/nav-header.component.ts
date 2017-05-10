import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  links: Object[];

  menuActive: boolean;

  constructor() {
    this.links = [
      {
        name: 'Home',
        link: '/home'
      },
      {
        name: 'Exec-Team',
        link: '/execs'
      },
      {
        name: 'Members',
        link: '/members'
      },
      {
        name: 'Calendar',
        link: '/calendar'
      }
    ];
    this.menuActive = false;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
    console.log(this.menuActive);
  }

  ngOnInit() {
  }

}
