import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ACSEvent } from '../events/ACSEvent';

@Component({
  selector: 'calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  events: Observable<ACSEvent[]>
  pastEvents: Observable<ACSEvent[]>
  eventsList: AngularFireList<ACSEvent>;
  pastEventsList: AngularFireList<ACSEvent>;
  upcomingEventsExist: boolean = false;

  constructor(private db: AngularFireDatabase) {
  }

  getEvents(): void {
    this.eventsList = this.db.list('events', ref =>
      ref.orderByChild('date')
        .startAt(new Date(Date.now()).toISOString())
        .limitToFirst(2)
    );
    this.eventsList.valueChanges().subscribe(snapshots => {
      if (snapshots.length) {
        this.upcomingEventsExist = true;
      }
    })
    this.pastEventsList = this.db.list('events', ref =>
      ref.orderByChild('date')
        .endAt(new Date(Date.now()).toISOString())
        .limitToLast(10)
    );
    this.events = this.eventsList.valueChanges();
    this.pastEvents = this.pastEventsList.valueChanges();
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
