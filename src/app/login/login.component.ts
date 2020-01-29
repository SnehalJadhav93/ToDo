import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private firebaseservice:FirebaseService) { }

  ngOnInit() {
  }

  loginClick()
  {
    this.firebaseservice.login(this.email,this.password);

  }

}
