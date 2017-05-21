import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss']
})
export class JoinPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class MemberData {
  public paid: boolean = false;

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public studentNumber: string
  ) {  }
}
