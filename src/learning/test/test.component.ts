import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  family = [
    {name:'Franklin Anto',age:30},
    {name:'Jasmine',age:18},
    {name:'Sam',age:6},
    {name:'Jia',age:2},
  ];

  type: 'KIDS' | 'ELDERS' = 'ELDERS';

  getKids(){
    return this.family.filter(x=>x.age<13);
  }
  getElders(){
    return this.family.filter(x=>x.age>=13);
  }
}
