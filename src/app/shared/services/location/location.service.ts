import { Injectable } from '@angular/core';
import { Location } from "./location";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationsCollection: AngularFirestoreCollection<Location>;
  locations: Observable<Location[]>;

  constructor(public afs: AngularFirestore) {
    this.locationsCollection = this.afs.collection('locations', ref => ref.orderBy('locationName','asc'));
  
    this.locations = this.afs.collection('locations').snapshotChanges().pipe(map(changes => {
      return changes.map( a=> {
        const data = a.payload.doc.data() as Location;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getLocation() {
    return this.locations;
  }

  addLocation(location: Location) {
    this.locationsCollection.add(location);
  }

  removeLocation(location) {
    const locationRef: AngularFirestoreDocument<Location> = this.afs.doc(`locations/${location.id}`);
    const data = {
      id: location.id,
      locationName: location.locationName,
      description: location.description,
      photoURL1: location.photoUrl1,
      photoURL2: location.photoUrl2,
      photoURL3: location.photoUrl3,
      photoURL4: location.photoUrl4,
      photoURL5: location.photoUrl5,
      videoURL: location.videoUrl,
      verified: false,
      loc: {
        latitude: location.loc.latitude,
        longitude: location.loc.longitude
      }
    }
    return locationRef.set(data, {
      merge: true
    })
  }

  
}
