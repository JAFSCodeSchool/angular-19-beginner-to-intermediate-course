import { AfterViewInit, Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NoteComponent } from './note/note.component';
import { Note } from '../../shared/models/note.model';
import { JsonPipe } from '@angular/common';
import { Form, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [RouterOutlet, NoteComponent, JsonPipe, FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements AfterViewInit {

  @ViewChild('detailsForm') detailsForm: NgForm | undefined = undefined;

  details = {
    name: '',
    age: 0,
    gender: 'm'
  };

  ngAfterViewInit(): void {
    
  }

  submit(form: NgForm) {
    console.log(form.value)
    form.reset();
  }
}