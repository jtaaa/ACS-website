import { ACSEvent } from './ACSEvent';

let IMG_PATH = './assets/images/'

export const ACSEvents: ACSEvent[] = [
  {
    id: 1,
    name: "Our first General Body Meeting for the Spring Term 2017!",
    description: `Come out and meet us. You get to meet all the new exec and we
                  will be voting in some new exec members for this Spring term.`,
    date: '10/11/12',
    images: [
      {
        src: IMG_PATH + 'events/GBM/GBM.jpg',
        pos: 1,
        state: 'center'
      },
      {
        src: IMG_PATH + 'events/GBM/GBM_people.jpg',
        pos: 2,
        state: 'right'
      }
    ],
  }
];

export const ACSPastEvents: ACSEvent[] = [
  {
    id: 1,
    name: "Back to the Caribbean! For one night only.",
    description: `Its that time again! Join ACS as we heat up The Bombshelter Pub on the 10th of February for Back to the Caribbean!`,
    date: '10/11/12',
    images: [
      {
        src: IMG_PATH + 'events/backtothecaribbean/backtothecaribbean.jpg',
        pos: 1,
        state: 'center'
      },
      {
        src: IMG_PATH + 'events/backtothecaribbean/backtothecaribbean-me.jpg',
        pos: 2,
        state: 'right'
      },
      {
        src: IMG_PATH + 'events/backtothecaribbean/backtothecaribbean-dari.jpg',
        pos: 3,
        state: 'right'
      }
    ],
  },
  {
    id: 2,
    name: "Our annual Fall formal Dinner, Fall 2017!",
    description: `It is once again time for ACS's annual fall semi-formal event, Fall For the Caribbean.
                  Join us for some good company, beautiful displays of costume and music and of course, food!`,
    date: '10/11/12',
    images: [
      {
        src: IMG_PATH + 'events/fallforthecaribbean/fallforthecaribbean.jpg',
        pos: 1,
        state: 'center'
      },
      {
        src: IMG_PATH + 'events/fallforthecaribbean/fallforthecaribbean_portrait.jpg',
        pos: 2,
        state: 'right'
      }
    ],
  },
  {
    id: 3,
    name: "Caribbean Pulse - The Heartbeat of the Islands",
    description: `Each semester ACS sells out Bomber and this Fall it is going to be bigger and better with give aways and great music!`,
    date: 'placeholder',
    images: [
      {
        src: IMG_PATH + 'events/caribbeanpulse/caribbeanpulse.jpg',
        pos: 1,
        state: 'center'
      },
      {
        src: IMG_PATH + 'events/caribbeanpulse/caribbeanpulse-flags.jpg',
        pos: 2,
        state: 'right'
      },
      {
        src: IMG_PATH + 'events/caribbeanpulse/caribbeanpulse-shank.jpg',
        pos: 3,
        state: 'right'
      },
      {
        src: IMG_PATH + 'events/caribbeanpulse/caribbeanpulse-people.jpg',
        pos: 4,
        state: 'right'
      }
    ],
  }
];
