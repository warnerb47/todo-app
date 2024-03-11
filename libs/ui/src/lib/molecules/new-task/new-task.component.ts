import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../../atomes';
import { Task } from 'libs/ui/src/core/models/task';

@Component({
  selector: 'todo-app-new-task',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() newTask = new EventEmitter<Task>();
  checked = false;

  createTask($event: Event): void {
    const label = ($event.target as HTMLInputElement).value;
    this.newTask.emit({
      checked: this.checked,
      index: 0,
      label,
    })
  }

  toggleCheck(): void {
    this.checked = !this.checked;
  }
}
