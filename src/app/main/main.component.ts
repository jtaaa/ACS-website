import { Component, OnInit } from '@angular/core';

let IMG_PATH = '../../assets/images/'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  peopleImages: any[];
  eventImages:  any[];

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

    this.eventImages = [
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
    ]
  }

  ngOnInit() {
  }

}
