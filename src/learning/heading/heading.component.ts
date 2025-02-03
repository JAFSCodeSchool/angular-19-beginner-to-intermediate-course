import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
})
export class HeadingComponent {
  @Input('heading') title = 'Default Title';
  @Input() user: User | undefined;

  @Output() success: EventEmitter<User> = new EventEmitter();
  @Output() failure: EventEmitter<{ error: string }> = new EventEmitter();

  onSubmit() {
    if (this.user) this.user.name = 'Franklin Anto Francis';

    this.success.emit(this.user);
  }
}
