import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ACSEvent } from '../events/ACSEvent';

@Component({
  selector: 'calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  events: FirebaseListObservable<ACSEvent[]>;
  pastEvents: FirebaseListObservable<ACSEvent[]>;
  upcomingEventsExist: boolean = false;

  constructor(private db: AngularFireDatabase) {
  }

  getEvents(): void {
    this.events = this.db.list('events', {
      query: {
        orderByChild: 'date',
        startAt: new Date(Date.now()).toISOString(),
        limitToFirst: 2
      }
    });
    this.events.subscribe(snapshots => {
      if (snapshots.length) {
        this.upcomingEventsExist = true;
      }
    })
    this.pastEvents = this.db.list('events', {
      query: {
        orderByChild: 'date',
        endAt: new Date(Date.now()).toISOString(),
        limitToLast: 4
      }
    });
  }


  ngOnInit(): void {
    this.getEvents();
  }

  toReadableDate(dateString): string {
    return new Date(dateString).toDateString()
  }

  toFloat(s) {
    return parseFloat(s);
  }

}
