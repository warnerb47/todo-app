import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'libs/ui/src/core/models/task';
import { StubTaskBuilder } from 'libs/ui/src/core/models/builders/task.builder';

@Component({
  selector: 'todo-app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() task: Task = new StubTaskBuilder().build();
}
