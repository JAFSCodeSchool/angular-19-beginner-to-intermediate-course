import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../shared/components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user: User = {
    name: 'Franklin',
    gender: 'm',
    age: 12,
  };

  onSuccess($e: User) {
    this.user = $e;
  }

  onFailure($e:{error:string}){
    console.log($e)
  }
}
