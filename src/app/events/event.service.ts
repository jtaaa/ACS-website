import { Injectable } from '@angular/core';

import { ACSEvent } from './ACSEvent';
import { ACSEvents } from './mock_events';
import { ACSPastEvents } from './mock_events';

@Injectable()
export class EventService {
  getEvents(): Promise<ACSEvent[]> {
    return Promise.resolve(ACSEvents);
  }
  getPastEvents(): Promise<ACSEvent[]> {
    return Promise.resolve(ACSPastEvents);
  }
}
