import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rate } from './rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  ratesCollection: AngularFirestoreCollection<Rate>;
  rates: Observable<Rate[]>;

  constructor(public afs: AngularFirestore) {
    this.ratesCollection = this.afs.collection('rates', ref => ref.orderBy('value','asc'));
  
    this.rates = this.afs.collection('rates').snapshotChanges().pipe(map(changes => {
      return changes.map( a=> {
        const data = a.payload.doc.data() as Rate;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getLocation() {
    return this.rates;
  }
}
