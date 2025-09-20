import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-side-bar-item',
  imports: [RouterLink],
  templateUrl: './side-bar-item.component.html',
  styleUrl: './side-bar-item.component.css'
})
export class SideBarItemComponent {
  @Input() route!: {path:string[], name:string};
}
