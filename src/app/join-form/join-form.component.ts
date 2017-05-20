import { Component, OnInit } from '@angular/core';
import { MemberData } from '../join-page/join-page.component'

@Component({
  selector: 'join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit {

  model = new MemberData('', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }
  
}
