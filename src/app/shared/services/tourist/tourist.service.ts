import { Injectable } from '@angular/core';
import { Tourist } from './tourist.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  formData: Tourist;

  constructor(private firestore:AngularFirestore) { }

  // To retrieve data stored
  getTour(){
    return this.firestore.collection('tour').snapshotChanges();
  }
}


