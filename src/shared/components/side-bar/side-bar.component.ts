import { Component } from '@angular/core';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';

@Component({
  selector: 'app-side-bar',
  imports: [SideBarItemComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  routes = [
    { name: 'Home', path: '/' },
    { name: 'Notes', path: '/notes' },
    { name: 'Trash', path: '/trash' },
  ];
}
