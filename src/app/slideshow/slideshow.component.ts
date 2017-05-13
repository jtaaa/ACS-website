import { Component, OnInit } from '@angular/core';

let IMG_PATH = '../../assets/images/slideshow/'

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images: Object[];

  curPos: number = 4;

  constructor() {

    this.images = [
      {
        src: IMG_PATH + 'shankjoshdylan.jpg',
        pos: 1
      },
      {
        src: IMG_PATH + 'shots.jpg',
        pos: 2
      },
      {
        src: IMG_PATH + 'adam.jpg',
        pos: 3
      },
      {
        src: IMG_PATH + 'kern.jpg',
        pos: 4
      },
      {
        src: IMG_PATH + 'me.jpg',
        pos: 5
      },
      {
        src: IMG_PATH + 'adam2.jpg',
        pos: 6
      },
      {
        src: IMG_PATH + 'tim.jpg',
        pos: 7
      }
    ]
  }

  ngOnInit() {
  }

  scrollLeft() {
    if (this.curPos > 1) {
      this.curPos -= 1;
    }
    else {
      console.log('No where to go left!')
    }
  }
  scrollRight() {
    if (this.curPos < this.images.length) {
      this.curPos += 1;
    }
    else {
      console.log('No where to go right!')
    }
  }
  gotoPos(pos) {
    this.curPos = pos;
  }

}
