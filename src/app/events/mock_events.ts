import { ACSEvent } from './ACSEvent';

let IMG_PATH = './assets/images/'

export const ACSEvents: ACSEvent[] = [
  {
    id: 1,
    name: "Our first General Body Meeting for the Spring Term 2017!",
    description: `Come out and meet us. You get to meet all the new exec and we
                  will be voting in some new exec members for this Spring term.`,
    date: '10/11/12',
    dbImagesPath: 'eventImages/E1'
  }
];

export const ACSPastEvents: ACSEvent[] = [
  {
    id: 1,
    name: "Back to the Caribbean! For one night only.",
    description: `Its that time again! Join ACS as we heat up The Bombshelter Pub on the 10th of February for Back to the Caribbean!`,
    date: '10/11/12',
    dbImagesPath: 'pastEventImages/E1'
  },
  {
    id: 2,
    name: "Our annual Fall formal Dinner, Fall 2017!",
    description: `It is once again time for ACS's annual fall semi-formal event, Fall For the Caribbean.
                  Join us for some good company, beautiful displays of costume and music and of course, food!`,
    date: '10/11/12',
    dbImagesPath: 'pastEventImages/E2'
  },
  {
    id: 3,
    name: "Caribbean Pulse - The Heartbeat of the Islands",
    description: `Each semester ACS sells out Bomber and this Fall it is going to be bigger and better with give aways and great music!`,
    date: 'placeholder',
    dbImagesPath: 'pastEventImages/E3'
  }
];
