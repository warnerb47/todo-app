import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'libs/ui/src/core/models/task';
import { TaskComponent } from '../../molecules';

@Component({
  selector: 'todo-app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  deleteTask(task: Task): void {
    console.log('delete', task);
  }
}
