import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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

  @Input() images: any[];

  @Input() heightPercent: number = 56.25;

  @Input() curPos: number = 1;

  constructor() {
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
