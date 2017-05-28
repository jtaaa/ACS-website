import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ACSEvent } from '../events/ACSEvent';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  peopleImagesDBPath: string = 'peopleImages';
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
        limitToLast: 3
      }
    });
  }

  ngOnInit(): void {
    this.getEvents();
  }

  toFloat(s) {
    return parseFloat(s);
  }

}
