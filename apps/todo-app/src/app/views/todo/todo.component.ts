import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent, TaskListComponent } from '@todo-app/ui';
import { Task } from 'libs/ui/src/core/models/task';

@Component({
  selector: 'todo-app-todo',
  standalone: true,
  imports: [CommonModule, NewTaskComponent, TaskListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  
  createTask(task: Task): void {
    console.log(task);
  }
}
