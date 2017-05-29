import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { SSImage } from '../slideshow/SSImage';

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [
    trigger('scroll-slideshow', [
      state('left',   style({ transform: 'translateX(-100%)', display: 'none' })),
      state('right',  style({ transform: 'translateX(100%)',  display: 'none' })),
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

  imagesRaw: FirebaseListObservable<any[]>;
  images: SSImage[] = [];
  imageCount: number;

  @Input() heightPercent: number = 56.25;
  @Input() curPos: number = 1;
  @Input() dbPath: string;


  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    let dbPeopleImageCount = this.db.object(this.dbPath + '/count', { preserveSnapshot: true })
    dbPeopleImageCount.subscribe(snapshot => {
      this.imageCount = snapshot.val();
    });
    this.imagesRaw = this.db.list(this.dbPath + '/images', { preserveSnapshot: true });
    this.imagesRaw.subscribe(snapshots => {
      let curImageNum: number = 1;
      let mid: number = Math.floor(this.imageCount / 2);
      snapshots.forEach(snapshot => {
        let curImageState: string;
        if (curImageNum < this.curPos) {
          curImageState = 'left';
        } else if (curImageNum > this.curPos) {
          curImageState = 'right';
        } else {
          curImageState = 'center';
        }
        this.images.push({
          src: snapshot.val(),
          pos: curImageNum++,
          state: curImageState
        });
      })
    });
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
    if (this.curPos < this.imageCount) {
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
