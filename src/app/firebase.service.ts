import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  name;
  contact;
  email;
  password;
  users;


  constructor(private af: AngularFireAuth,private ad:AngularFireDatabase)
   
  { }

   login(email,password)
   {
     this.af.auth.signInWithEmailAndPassword(email,password).then(result => {
       alert("login successfully");
     }).catch(error =>{
       alert(error);
     })

   }

   register(email,password,name,contact)
   {
     this.af.auth.createUserWithEmailAndPassword(email,password).then(result =>
      {
        this.ad.database.ref().child("users").child(result.user.uid).set({
          "name":name,
          "contact":contact,
          "email":email,
          "password":password
        })
        alert("register successfully");
      }).catch(error =>
        {
          alert(error);
        })
   }
}
