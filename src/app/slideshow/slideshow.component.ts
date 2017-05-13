import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

let IMG_PATH = '../../assets/images/slideshow/'

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [
    trigger('scroll-slideshow', [
      state('left',   style({ transform: 'translateX(-100%)' })),
      state('right',  style({ transform: 'translateX(100%)'  })),
      state('center', style({ transform: 'translateX(0)'     })),
      transition('left => center', [
        animate('0.2s 50ms ease-out')
      ]),
      transition('center => left', [
        animate('0.2s 50ms ease-out')
      ]),
      transition('center => right', [
        animate('0.2s 50ms ease-out')
      ]),
      transition('right => center', [
        animate('0.2s 50ms ease-out')
      ])
    ])
  ]
})
export class SlideshowComponent implements OnInit {

  images: any[];

  curPos: number = 4;

  constructor() {

    this.images = [
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
  }

  ngOnInit() {
  }

  scrollLeft() {
    if (this.curPos > 1) {
      this.curPos -= 1;
      this.updateCenter();
    }
    else {
      console.log('No where to go left!')
    }
  }
  scrollRight() {
    if (this.curPos < this.images.length) {
      this.curPos += 1;
      this.updateCenter();
    }
    else {
      console.log('No where to go right!')
    }
  }
  gotoPos(pos) {
    this.curPos = pos;
    this.updateCenter();
  }

  updateCenter() {
    for (let image of this.images) {
      if (image.pos > this.curPos) {
        image.state = 'right';
      } else if (image.pos < this.curPos) {
        image.state = 'left'
      } else {
        image.state = 'center';
      }
    }
  }

}
