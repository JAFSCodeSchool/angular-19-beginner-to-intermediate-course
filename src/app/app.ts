import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../shared/components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { UserDto } from '../shared/models/user-dto.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  user: UserDto = {
    name: 'Franklin',
    gender: 'm',
    age: 12,
  };

  onSuccess($e: UserDto) {
    this.user = $e;
  }

  onFailure($e:{error:string}){
    console.log($e)
  }
}
