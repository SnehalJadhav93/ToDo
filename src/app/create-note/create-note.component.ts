import { Component, OnInit } from '@angular/core';
import { TodService } from '../tod.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  topic:string;
  message:string;
  

  constructor(private Service:TodService) { }

  clickCreate()
  {
    this.Service.addNote(this.topic,this.message);
    console.log("Successfully Created");
  }


  ngOnInit() {
  }

}
