import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Star } from './star';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  starsCollection: AngularFirestoreCollection<Star>;
  stars: Observable<Star[]>;

  constructor(public afs: AngularFirestore) {
    this.starsCollection = this.afs.collection('stars', ref => ref.orderBy('value','asc'));
  
    this.stars = this.afs.collection('stars').snapshotChanges().pipe(map(changes => {
      return changes.map( a=> {
        const data = a.payload.doc.data() as Star;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getStars(guideId) {
    const stars = this.afs.collection('stars', ref => ref.where('guideId', '==', guideId) );
    return stars.valueChanges();
  }
}