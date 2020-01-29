import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { FirebaseService } from '../firebase.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 users;
 email;
 password;
 name;
 contact;
 constructor(private ad:AngularFireDatabase,private fs: FirebaseService) { }
  ngOnInit() 
  {
    
   
   
  this.ad.database.ref().child("users").on('value',snapshot =>
  {
    this.users = [];
    snapshot.forEach(doc =>{
      let data=doc.val();
      this.users.push(data);
    })

  })


  }

  
  registerClick()
    {
    console.log(this.email);
    console.log(this.password);
    this.fs.register(this.email,this.password,this.name,this.contact);
    }
}
