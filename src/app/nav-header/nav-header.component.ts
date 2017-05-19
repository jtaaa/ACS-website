import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  animations: [
    trigger('fade-in', [
      state('in', style({opacity: 0.98})),
      transition('void => *', [
        style({opacity: 0}),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({opacity: 0}))
      ])
    ]),
    trigger('shrink-in', [
      state('in', style({transform: 'scale(1, 1)'})),
      transition('void => *', [
        style({transform: 'scale(1.2, 2)'}),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({transform: 'scale(1.2, 2)'}))
      ])
    ])
  ]
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
        name: 'About',
        link: '/about'
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
