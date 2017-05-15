import { Component, OnInit } from '@angular/core';

let IMG_PATH = './assets/images/'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  peopleImages: any[];
  events: any[];

  constructor() {

    this.peopleImages = [
      {
        src: IMG_PATH + 'slideshow/shankjoshdylan.jpg',
        pos: 1,
        state: 'left'
      },
      {
        src: IMG_PATH + 'slideshow/shots.jpg',
        pos: 2,
        state: 'left'
      },
      {
        src: IMG_PATH + 'slideshow/adam.jpg',
        pos: 3,
        state: 'left'
      },
      {
        src: IMG_PATH + 'slideshow/kern.jpg',
        pos: 4,
        state: 'center'
      },
      {
        src: IMG_PATH + 'slideshow/me.jpg',
        pos: 5,
        state: 'right'
      },
      {
        src: IMG_PATH + 'slideshow/adam2.jpg',
        pos: 6,
        state: 'right'
      },
      {
        src: IMG_PATH + 'slideshow/tim.jpg',
        pos: 7,
        state: 'right'
      }
    ]

    this.events = [
      {
        images: [
          {
            src: IMG_PATH + 'events/GBM.jpg',
            pos: 1,
            state: 'center'
          },
          {
            src: IMG_PATH + 'events/fallforthecaribbean.jpg',
            pos: 2,
            state: 'right'
          }
        ],
        title: "Our first General Body Meeting for the Spring Term 2017!",
        description: `Come out and meet us. You get to meet all the new exec and we
                      will be voting in some new exec members for this Spring term.`
      },
      {
        images: [
          {
            src: IMG_PATH + 'events/fallforthecaribbean.jpg',
            pos: 1,
            state: 'center'
          },
          {
            src: IMG_PATH + 'events/fallforthecaribbean.jpg',
            pos: 2,
            state: 'right'
          }
        ],
        title: "Our annual Fall formal Dinner, Fall 2017!",
        description: `Come out and meet us. You get to meet all the new exec and we
                      will be voting in some new exec members for this Spring term.`
      },
      {
        images: [
          {
            src: IMG_PATH + 'events/caribbeanpulse.jpg',
            pos: 1,
            state: 'center'
          },
          {
            src: IMG_PATH + 'events/fallforthecaribbean.jpg',
            pos: 2,
            state: 'right'
          }
        ],
        title: "Caribbean Pulse - The Heartbeat of the Islands",
        description: `Come out and meet us. You get to meet all the new exec and we
                      will be voting in some new exec members for this Spring term.`
      },
      {
        images: [
          {
            src: IMG_PATH + 'events/backtothecaribbean.png',
            pos: 1,
            state: 'center'
          },
          {
            src: IMG_PATH + 'events/fallforthecaribbean.jpg',
            pos: 2,
            state: 'right'
          }
        ],
        title: "Back to the Caribbean! For one night only.",
        description: `Come out and meet us. You get to meet all the new exec and we
                      will be voting in some new exec members for this Spring term.`
      }
    ]
  }

  ngOnInit() {
  }

  toInt(s) {
    return parseInt(s);
  }

}
