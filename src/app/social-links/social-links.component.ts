import { Component, OnInit } from '@angular/core';

let IMG_PATH: string = './assets/images/social/';

@Component({
  selector: 'social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  socialLinks: Object[];

  constructor() {

    this.socialLinks = [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/uWaterlooACS/',
        src: IMG_PATH + 'facebook-black.svg'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/uwaterlooacs/',
        src: IMG_PATH + 'instagram-black.svg'
      },
      {
        name: 'Snapchat',
        link: IMG_PATH + 'snapcode.png',
        src: IMG_PATH + 'snapchat-black.svg'
      }
    ]
  }

  ngOnInit() {
  }

}
