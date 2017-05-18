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
  pastEvents: any[];

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
    ];

    this.events = [
      {
        images: [
          {
            src: IMG_PATH + 'events/GBM.jpg',
            pos: 1,
            state: 'center'
          },
          {
            src: IMG_PATH + 'events/GBM_people.jpg',
            pos: 2,
            state: 'right'
          }
        ],
        title: "Our first General Body Meeting for the Spring Term 2017!",
        description: `Come out and meet us. You get to meet all the new exec and we
                      will be voting in some new exec members for this Spring term.`
      }
    ];

    this.pastEvents = [
      {
        images: [
          {
            src: IMG_PATH + 'events/fallforthecaribbean/fallforthecaribbean.jpg',
            pos: 1,
            state: 'center'
          },
          {
            src: IMG_PATH + 'events/fallforthecaribbean/fallforthecaribbean_portrait.jpg',
            pos: 2,
            state: 'right'
          },
          {
            src: IMG_PATH + 'events/fallforthecaribbean/fallforthecaribbean_food.jpg',
            pos: 3,
            state: 'right'
          }
        ],
        title: "Our annual Fall formal Dinner, Fall 2017!",
        description: `It is once again time for ACS's annual fall semi-formal event, Fall For the Caribbean.
                      Join us for some good company, beautiful displays of costume and music and of course, food!`
      },
      {
        images: [
          {
            src: IMG_PATH + 'events/caribbeanpulse/caribbeanpulse.jpg',
            pos: 1,
            state: 'center'
          },
          {
            src: IMG_PATH + 'events/caribbeanpulse/caribbeanpulse-flags.jpg',
            pos: 2,
            state: 'right'
          },
          {
            src: IMG_PATH + 'events/caribbeanpulse/caribbeanpulse-shank.jpg',
            pos: 3,
            state: 'right'
          },
          {
            src: IMG_PATH + 'events/caribbeanpulse/caribbeanpulse-people.jpg',
            pos: 4,
            state: 'right'
          }
        ],
        title: "Caribbean Pulse - The Heartbeat of the Islands",
        description: `Each semester ACS sells out Bomber and this Fall it is going to be bigger and better with give aways and great music!`
      },
      {
        images: [
          {
            src: IMG_PATH + 'events/backtothecaribbean/backtothecaribbean.jpg',
            pos: 1,
            state: 'center'
          },
          {
            src: IMG_PATH + 'events/backtothecaribbean/backtothecaribbean-me.jpg',
            pos: 2,
            state: 'right'
          },
          {
            src: IMG_PATH + 'events/backtothecaribbean/backtothecaribbean-dari.jpg',
            pos: 3,
            state: 'right'
          }
        ],
        title: "Back to the Caribbean! For one night only.",
        description: `Its that time again! Join ACS as we heat up The Bombshelter Pub on the 10th of February for Back to the Caribbean!`
      }
    ]
  }

  ngOnInit() {
  }

  toFloat(s) {
    return parseFloat(s);
  }

}
