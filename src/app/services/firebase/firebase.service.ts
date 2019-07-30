import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  createUser(value: any) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then((data: any) => {
        this.db.collection(`users`).doc(data.user.uid).set({
          email: value.email
        }).then((res) => {
          console.log(res);
          resolve(res);
        });
      }).catch((err) => {
        reject(err);
      });
    })
  }
}
