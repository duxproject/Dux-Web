import { Injectable } from '@angular/core';
import { Package } from './package';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  formData: Package;

  constructor(private firestore:AngularFirestore) { }

  // To retrieve data stored
  getPackage(){
    return this.firestore.collection('package').snapshotChanges();
  }
}
