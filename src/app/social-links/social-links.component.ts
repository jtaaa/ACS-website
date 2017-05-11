import { Component, OnInit } from '@angular/core';

let IMG_PATH: string = '../../assets/images/social/';

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
        link: 'Facebook.com',
        src: IMG_PATH + 'facebook-black.svg'
      },
      {
        name: 'Instagram',
        link: 'instagram.com',
        src: IMG_PATH + 'instagram-black.svg'
      },
      {
        name: 'Snapchat',
        link: 'Snapchat.com',
        src: IMG_PATH + 'snapchat-black.svg'
      }
    ]
  }

  ngOnInit() {
  }

}
