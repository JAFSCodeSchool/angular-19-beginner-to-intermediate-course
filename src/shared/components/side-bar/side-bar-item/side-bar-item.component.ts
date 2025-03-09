import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-item',
  imports: [],
  templateUrl: './side-bar-item.component.html',
  styleUrl: './side-bar-item.component.css'
})
export class SideBarItemComponent {
  @Input() menuDetails!: { name: string, path: string };
}
