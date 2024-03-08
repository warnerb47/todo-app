import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent, TaskListComponent } from '@todo-app/ui';

@Component({
  selector: 'todo-app-todo',
  standalone: true,
  imports: [CommonModule, NewTaskComponent, TaskListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {}
