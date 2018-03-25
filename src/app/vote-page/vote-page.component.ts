import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent implements OnInit {
  
  positionsVals: any[];
  positions: Observable<any[]>;
  vote: any = {}

  constructor(private db: AngularFireDatabase) {
    this.positions =
      db.list('voting/positions')
      .valueChanges();
    db.list('voting/positions')
      .snapshotChanges()
      .map(arr => {
        return arr.map(snap => {
          return snap.payload.val();
        });
      })
      .subscribe(response => {
        this.positionsVals = response;
      });
  }
  ngOnInit() {
  }

  submit() {
    console.log(this.vote);
    this.positionsVals.forEach(position => {
      if (this.vote[position.name]) {
        console.log(`voting/positions/${position.id}/candidates/${this.vote[position.name]}`);
        const itemRef =
          this.db.object(`voting/positions/${position.id}/candidates/${this.vote[position.name]}/votes`);
        itemRef.query.ref.transaction(votes => {
          if (votes === null) {
            return votes = 1;
          } else {
            return votes + 1;
          }
        });
      }
    });
  }
  selectCandidate(positionName, candidateId) {
    this.vote[positionName] = candidateId;
  }
}
