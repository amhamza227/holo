import { GlobalsProvider } from './../../../providers/globals/globals';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore, public global: GlobalsProvider) { }

  createUser(value: any) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then((data: any) => {
        this.db.collection(`users`).doc(data.user.uid).set({
          email: value.email
        }).then((res) => {
          this.global.userId = data.user.uid;
          console.log(res);
          resolve(res);
        });
      }).catch((err) => {
        reject(err);
      });
    })
  }

  registerUser2(value: any) {
    return new Promise<any>((resolve, reject) => {
        this.db.collection(`users`).doc(this.global.userId).update({
          house: {
            cemail: value.email,
            kids: value.kids,
            grade: value.grade,
            group: value.group
        }
        }).then((res) => {
          console.log(res);
          resolve(res);
        }).catch((err) => {
        reject(err);
      });
    });
  }

  registerUser3(value: any) {
    return new Promise<any>((resolve, reject) => {
        this.db.collection(`users`).doc(this.global.userId).update({
          car: { 
            name: value.name,
            carModel: value.carModel,
            grade: value.grade,
            group: value.group
          }
        }).then((res) => {
          console.log(res);
          resolve(res);
        }).catch((err) => {
        reject(err);
      });
    });
  }

  registerUser4(value: any) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(`users`).doc(this.global.userId).update({
        location: {
          location: value.location,
          neighbour: value.neighbour
        }
      }).then((res) => {
        console.log(res);
        resolve(res);
      }).catch((err) => {
      reject(err);
    });
  });
  }

  registerUser5(value: any) {
    return new Promise<any>((resolve, reject) => {
        this.db.collection(`users`).doc(this.global.userId).update({
          location: value.location,
          neighbour: value.neighbour
        }).then((res) => {
          console.log(res);
          resolve(res);
        }).catch((err) => {
        reject(err);
      });
    });
  }
}
