import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { TrashComponent } from './trash/trash.component';
import { InvalidComponent } from './invalid/invalid.component';
import { NoteComponent } from './notes/note/note.component';
import { TestComponent } from '../learning/test/test.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'notes',
    component: NotesComponent,
    children: [
        { path: ':name', component: NoteComponent }
    ],
  },

  { path: 'trash', component: TrashComponent },
  { path: 'test', component:TestComponent  },
  { path: '**', component: InvalidComponent },
];
