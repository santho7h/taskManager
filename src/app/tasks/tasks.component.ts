import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  newTaskAdded = false;

  tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];

get selectedUserTasks() {
  return this.tasks.filter((task) => task.userId === this.userId);
}

onCompleteTask(taskId: string) {
  this.tasks = this.tasks.filter((task) => task.id !== taskId)
  console.log('Task completed:', taskId);
}

onNewTaskAdded() {
  this.newTaskAdded = true;
  console.log('Task created');
}

onNewTaskCancelled() {
  this.newTaskAdded = false;
  console.log('New task creation cancelled');
}

}