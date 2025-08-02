import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewtaskComponent {

  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancel() {
    this.cancel.emit();
    console.log('Cancel button clicked and emitted');
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate()
    });
    console.log('Form submitted with:', {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate()
    });
  }

}
