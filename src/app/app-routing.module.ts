import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateNoteComponent} from './create-note/create-note.component';
import {NoteListComponent} from './note-list/note-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
  {path:'create-note',component:CreateNoteComponent},
  {path:'note-list',component:NoteListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
