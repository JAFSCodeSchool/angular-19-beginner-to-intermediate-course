import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notes } from './notes/notes';
import { Trash } from './trash/trash';
import { Invalid } from './invalid/invalid';
import { Note } from './notes/note/note';
import { TestComponent } from '../learning/test/test.component';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'notes',
    component: Notes,
    children: [
        { path: ':name', component: Note }
    ],
  },

  { path: 'trash', component: Trash },
  { path: 'test', component:TestComponent  },
  { path: '**', component: Invalid },
];
