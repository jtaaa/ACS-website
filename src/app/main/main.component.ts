import { Component, OnInit } from '@angular/core';

let IMG_PATH = '../../assets/images/slideshow/'

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
        src: IMG_PATH + 'shankjoshdylan.jpg',
        pos: 1,
        state: 'left'
      },
      {
        src: IMG_PATH + 'shots.jpg',
        pos: 2,
        state: 'left'
      },
      {
        src: IMG_PATH + 'adam.jpg',
        pos: 3,
        state: 'left'
      },
      {
        src: IMG_PATH + 'kern.jpg',
        pos: 4,
        state: 'center'
      },
      {
        src: IMG_PATH + 'me.jpg',
        pos: 5,
        state: 'right'
      },
      {
        src: IMG_PATH + 'adam2.jpg',
        pos: 6,
        state: 'right'
      },
      {
        src: IMG_PATH + 'tim.jpg',
        pos: 7,
        state: 'right'
      }
    ]

    this.eventImages = [
      {
        src: IMG_PATH + 'adam2.jpg',
        pos: 1,
        state: 'center'
      },
      {
        src: IMG_PATH + 'tim.jpg',
        pos: 2,
        state: 'right'
      }
    ]
  }

  ngOnInit() {
  }

}
