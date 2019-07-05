import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUserId;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private router: Router) {
      this.currentUserId = this.auth.getUser();
    }

  get(chatId) {
    return this.afs
      .collection<any>('chats')
      .doc(chatId)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  }

  async getGuideList() {
    const guideList = [];

    this.afs.collection('users').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }).subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.roles.guide) {
          guideList.push(doc);
        }
      });
    });

    return guideList;
  }

  getUserChats() {
    if (this.auth.user) {
      console.log(this.auth.user);
    }
    return this.auth.user.pipe(
      switchMap(user => {
        console.log(user.uid);
        if (!user.roles.guide && user.roles.tourist) {
          console.log('tourist');
          return this.afs
            .collection('chats', ref => ref.where('uid', '==', user.uid))
            .snapshotChanges()
            .pipe(
              map(actions => {
                return actions.map(a => {
                  const data: any = a.payload.doc.data();
                  const id = a.payload.doc.id;
                  return { id, ...data };
                });
              })
            );
        } else if (user.roles.guide && !user.roles.tourist) {
          console.log('guide');
          return this.afs
            .collection('chats', ref => ref.where('guideId', '==', user.uid))
            .snapshotChanges()
            .pipe(
              map(actions => {
                return actions.map(a => {
                  const data: any = a.payload.doc.data();
                  const id = a.payload.doc.id;
                  return { id, ...data };
                });
              })
            );
        }
      })
    );
  }

  async chatExists(guideId, userId) {
    return this.afs
      .collection('chats', ref => ref.where('guideId', '==', guideId))
      .snapshotChanges()
      .subscribe(res => {
        if (res.length > 0) {
          return true;
        } else {
          return false;
        }
      });
  }

  async create(guideId) {
    const { uid } = await this.auth.GetUser();

    const data = {
      topic: 'New chat',
      uid,
      guideId,
      createdAt: Date.now(),
      count: 0,
      messages: []
    };

    return this.afs
      .collection('chats', ref => ref.where('guideId', '==', guideId).where('uid', '==', uid))
      .snapshotChanges()
      .subscribe(res => {
        if (res.length > 0) {
          console.log(res[0].payload.doc.id);
          console.log('exists');
          return;
        } else {
          console.log('not exists');
          this.afs.collection('chats').add(data);
          return;
        }
      });


    // return docId;
    // return this.router.navigate(['chats', docRef.id]);
  }

  async sendMessage(chatId, content) {
    const { uid } = await this.auth.GetUser();

    const data = {
      uid,
      content,
      createdAt: Date.now()
    };

    if (uid) {
      const ref = this.afs.collection('chats').doc(chatId);
      return ref.update({
        messages: firestore.FieldValue.arrayUnion(data)
      });
    }
  }

  async updateTopic(chatId, topic) {
    const { uid } = await this.auth.GetUser();

    if (uid) {
      const ref = this.afs.collection('chats').doc(chatId);
      return ref.update({
        topic
      });
    }
  }

  async deleteMessage(chat, msg) {
    const { uid } = await this.auth.GetUser();

    const ref = this.afs.collection('chats').doc(chat.id);
    console.log(msg);
    if (chat.uid === uid || msg.uid === uid) {
      // Allowed to delete
      delete msg.user;
      return ref.update({
        messages: firestore.FieldValue.arrayRemove(msg)
      });
    }
  }

  joinUsers(chat$: Observable<any>) {
    let chat;
    const joinKeys = {};

    return chat$.pipe(
      switchMap(c => {
        // Unique User IDs
        chat = c;
        const uids = Array.from(new Set(c.messages.map(v => v.uid)));

        // Firestore User Doc Reads
        const userDocs = uids.map(u =>
          this.afs.doc(`users/${u}`).valueChanges()
        );

        return userDocs.length ? combineLatest(userDocs) : of([]);
      }),
      map(arr => {
        // tslint:disable-next-line:no-angle-bracket-type-assertion
        arr.forEach(v => (joinKeys[(<any> v).uid] = v));
        chat.messages = chat.messages.map(v => {
          return { ...v, user: joinKeys[v.uid] };
        });

        return chat;
      })
    );
  }
}
