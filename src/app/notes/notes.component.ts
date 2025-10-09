import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NoteComponent } from './note/note.component';
import { Note } from '../../shared/models/note.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [RouterOutlet, NoteComponent, JsonPipe],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit{
  
  notes = signal<Note[]>([
    {
      id: 1,
      title:'Some Title',
      details:'some details to show'
    },
    {
      id: 2,
      title:'Some Title 2',
      details:'some details to show 2'
    }
  ]);

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.notes[0].title = 'test';
    // }, 2000);
  }
}
