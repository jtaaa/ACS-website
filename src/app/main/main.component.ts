import { Component, OnInit } from '@angular/core';

import { ACSEvent } from '../events/ACSEvent';
import { EventService } from '../events/event.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [EventService]
})
export class MainComponent implements OnInit {

  peopleImagesDBPath: string = 'peopleImages';
  events: ACSEvent[] = [];
  pastEvents: ACSEvent[] = [];

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
