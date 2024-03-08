import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../../atomes';

@Component({
  selector: 'todo-app-new-task',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  
  checked = false;

  createTask($event: Event): void {
    console.log(($event.target as HTMLInputElement).value, this.checked);
  }

  toggleCheck(): void {
    this.checked = !this.checked;
  }
}
