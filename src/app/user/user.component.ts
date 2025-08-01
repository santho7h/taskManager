import { Component, Input, Output, EventEmitter, output, input, computed} from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) id!: string
  // @Input() avatar!: string;
  // @Input() name!: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  
  @Output() select = new EventEmitter();
  
  // avatar = input.required<string>();
  // name = input.required<string>();
  //select = output<string>();
  
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
