import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email;
  password;
  contact;
  dob;
  name;
  users;

  constructor(private af:AngularFireAuth,private afd:AngularFireDatabase) { }

  ngOnInit() {
   this.fetchData();
  }

  registrationClick()
  {
    this.af.auth.createUserWithEmailAndPassword(this.email,this.password).then(user =>
      {
        this.afd.database.ref().child("users").child(user.user.uid).update({
          "name":this.name,
          "dob":this.dob,
          "email":this.email,
          "contact":this.contact
          })
      }).catch(error =>{
        console.log(error);
      })
  }

  fetchData()
  {
       this.afd.database.ref().child("users").on("value",result =>{
         //let data=result.val();
         this.users=[];
         result.forEach(user =>{
           this.users.push(user.val())
         })
         console.log(this.users);
       })
  }

}
