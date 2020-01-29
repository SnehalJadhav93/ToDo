import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TodService {
arr=[];
  constructor(private af:AngularFireAuth,private afd:AngularFireDatabase) { }

  addNote(topic,message)
{
  var id=this.afd.database.ref().child("todos").push().key
  this.afd.database.ref().child("todos").child(id).set({
    topic:topic,
    message:message,
    id:id
  })
}

fetchNote()
{
  this.afd.database.ref().child("todos").on('value',snapshot =>
  {
    snapshot.forEach(doc=>{
      this.arr.push(doc.val())
    })
  })
}
updateNote(topic,message,id)
{
  this.afd.database.ref().child("todos").child(id).update({
    topic:topic,
    message:message
  })
}

deleteNote(id)
{
  this.afd.database.ref().child("todos").child(id).remove()
}

}
