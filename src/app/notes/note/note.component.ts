import { Component, computed, input, model, OnInit } from '@angular/core';
import { Note } from '../../../shared/models/note.model';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit{
  
  note = model.required<Note>()
  index = input(-1, {transform:this.toSNo, alias:'sno'});
  // sNo = computed(()=>this.index()+1)

  toSNo(input:number):number{
    return input+1;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.note.update((x)=> {
        x.title = 'test';
        return x;
      })
    }, 2000);
  }
}
