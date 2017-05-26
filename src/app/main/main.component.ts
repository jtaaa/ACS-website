import { Component, OnInit } from '@angular/core';

import { ACSEvent } from '../events/ACSEvent';
import { EventService } from '../events/event.service';

let IMG_PATH = './assets/images/'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [EventService]
})
export class MainComponent implements OnInit {

  peopleImages: any[];
  events: ACSEvent[];
  pastEvents: ACSEvent[];

  constructor(private eventService: EventService) {
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
  }

  getEvents(): void {
    this.eventService.getEvents().then(events => this.events = events);
  }

  getPastEvents(): void {
    this.eventService.getPastEvents().then(events => this.pastEvents = events);
  }

  ngOnInit(): void {
    this.getEvents();
    this.getPastEvents();
  }

  toFloat(s) {
    return parseFloat(s);
  }

}
