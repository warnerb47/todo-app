import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'libs/ui/src/core/models/task';
import { StubTaskBuilder } from 'libs/ui/src/core/models/builders/task.builder';
import { CheckboxComponent, InputComponent } from '../../atomes';

@Component({
  selector: 'todo-app-task',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, InputComponent ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Output() taskDeleted = new EventEmitter<Task>();
  @Input() task: Task = new StubTaskBuilder().build();

  toggleCheck(): void {
    this.task.checked = !this.task.checked;
  }

  deleteTask(): void {
    this.taskDeleted.emit(this.task);
  }

  checkTask(): void {
    this.task.checked = !this.task.checked;
  }
}
