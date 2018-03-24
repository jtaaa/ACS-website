import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MemberData } from '../join-page/join-page.component'

@Component({
  selector: 'join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit {

  model = new MemberData('', '', '', '');
  submitted: boolean = false;
  editting: boolean = false;
  deleted: boolean = false;
  prevStudentNumber: string = '';

  memberList: AngularFireList<any>;

  onSubmit(form) {
    this.submitted = true;
    if (this.editting && this.prevStudentNumber &&
        this.prevStudentNumber != this.model.studentNumber) {
      this.remove(this.prevStudentNumber);
      this.editting = false;
    }
    const toSend = this.db.object(`/members/${this.model.studentNumber}`);
    toSend.set(this.model);
  }
  onEdit(editModel) {
    this.submitted = false;
    this.editting = true;
    this.prevStudentNumber = editModel.studentNumber;
  }
  remove(studentNumber) {
    const toDelete = this.db.object(`/members/${studentNumber}`);
    toDelete.remove();
  }
  delete(studentNumber) {
    this.remove(studentNumber);
    this.model = new MemberData('', '', '', '');
    this.deleted = true;
    this.editting = false;
    this.submitted = false;
  }

  constructor(private db: AngularFireDatabase) {
    this.memberList = db.list('/members');
  }

  ngOnInit() {
  }

}
