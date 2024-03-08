import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {}
