import { Component, OnInit } from '@angular/core';

import { ACSEvent } from '../events/ACSEvent';
import { EventService } from '../events/event.service';

let IMG_PATH = './assets/images/'

@Component({
  selector: 'calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss'],
  providers: [EventService]
})
export class CalendarPageComponent implements OnInit {

  events: ACSEvent[];
  pastEvents: ACSEvent[];

  constructor(private eventService: EventService) {
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
