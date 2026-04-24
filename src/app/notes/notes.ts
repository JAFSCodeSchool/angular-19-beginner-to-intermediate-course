import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Note } from './note/note';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [RouterOutlet, Note, JsonPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {

  userDetails = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(100)]),
    address: new FormGroup({
      line1: new FormControl(),
      line2: new FormControl(),
      city: new FormControl(null, Validators.required),
    })
  })



  submit() {
    if(this.userDetails.valid)
    {
      console.log(this.userDetails.value)
    }else{
      console.log('error')
    }
  }
}