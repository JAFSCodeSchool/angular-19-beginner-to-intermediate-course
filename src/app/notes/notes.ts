import { Component, inject } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Note } from './note/note';
import { JsonPipe } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [RouterOutlet, Note, JsonPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {

  fb = inject(FormBuilder)

  userDetails = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
    age: [null, [Validators.required, Validators.min(18), Validators.max(100)]],
    address: this.fb.group({
      line1: null,
      line2: null,
      city: [null, Validators.required],
    }),
    skills: this.fb.array([this.createSkill()])
  })

  get skills():FormArray{
    return this.userDetails.get('skills') as FormArray;
  }

  addSkill(){
    this.skills.push(this.createSkill())
  }

  createSkill(){
    return this.fb.group({skill:null,experience:null});
  }

  removeSkill(index:number){
    if(this.skills.length<=1) return;
    this.skills.removeAt(index)
  }

  submit() {
    if(this.userDetails.valid)
    {
      console.log(this.userDetails.value)
    }else{
      console.log('error')
    }
  }
}