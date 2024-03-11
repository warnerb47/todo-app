import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent, TaskListComponent } from '@todo-app/ui';
import { Task } from 'libs/ui/src/core/models/task';
import { StubTaskBuilder } from 'libs/ui/src/core/models/builders/task.builder';

@Component({
  selector: 'todo-app-todo',
  standalone: true,
  imports: [CommonModule, NewTaskComponent, TaskListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  tasks: Task[] = [
    new StubTaskBuilder().withIndex(0).withLabel('Init project').withChecked(true).build(),
    new StubTaskBuilder().withIndex(1).withLabel('Setup CI/CD').build(),
    new StubTaskBuilder().withIndex(2).withLabel('Init test').build(),
  ];

  createTask(task: Task): void {
    console.log(task);
  }
}
