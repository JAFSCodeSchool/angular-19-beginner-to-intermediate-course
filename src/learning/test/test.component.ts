import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  OnInit,
  signal,
  untracked,
} from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnInit {
  injector = inject(Injector);
  name = signal('Franklin Anto');
  age = signal(30);
  gender = signal('female');

  isMajor = computed(() => {
    if (this.gender() === 'male') {
      return this.age() >= 18 ? true : false;
    } else {
      return false;
    }
  });

  afterEffect = effect(
    () => {
      console.log(
        'the age is ' +
          this.age() +
          ' and my gender is ' +
          untracked(this.gender)
      );
    },
    { injector: this.injector }
  );

  ngOnInit(): void {
    // this.name.set('Jasmine');
    // this.name.update((value)=>value + 'Jasmine')
    setTimeout(() => {
      this.gender.set('male');
      // this.age.set(10)
    }, 2000);
  }
  // family = [
  //   {name:'Franklin Anto',age:30},
  //   {name:'Jasmine',age:18},
  //   {name:'Sam',age:6},
  //   {name:'Jia',age:2},
  // ];

  // type: 'KIDS' | 'ELDERS' = 'ELDERS';

  // getKids(){
  //   return this.family.filter(x=>x.age<13);
  // }
  // getElders(){
  //   return this.family.filter(x=>x.age>=13);
  // }
}
