import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ACSEvent } from '../events/ACSEvent';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  peopleImagesDBPath: string = 'peopleImages';
  events: Observable<ACSEvent[]>
  pastEvents: Observable<ACSEvent[]>
  eventsList: AngularFireList<ACSEvent>;
  pastEventsList: AngularFireList<ACSEvent>;
  upcomingEventsExist: boolean = false;

  constructor(private db: AngularFireDatabase) {
  }

  getEvents(): void {
    this.eventsList = this.db.list<ACSEvent>('events', ref =>
      ref.orderByChild('date')
        .startAt(new Date(Date.now()).toISOString())
        .limitToFirst(2)
    );
    // {
    //   query: {
    //     orderByChild: 'date',
    //     startAt: new Date(Date.now()).toISOString(),
    //     limitToFirst: 2
    //   }
    // }
    this.eventsList.valueChanges().subscribe(snapshots => {
      if (snapshots.length) {
        this.upcomingEventsExist = true;
      }
    });
    this.pastEventsList = this.db.list<ACSEvent>('events', ref =>
      ref.orderByChild('date')
        .endAt(new Date(Date.now()).toISOString())
        .limitToLast(3)
    );
    this.events = this.eventsList.valueChanges();
    this.pastEvents = this.pastEventsList.valueChanges();
  }

  ngOnInit(): void {
    this.getEvents();
  }

  toFloat(s) {
    return parseFloat(s);
  }

  toReadableDate(dateString): string {
    return new Date(dateString).toDateString()
  }

}
