import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Output() taskChecked = new EventEmitter<void>();
  @Input() checked = false;

  toggleCheck(): void {
    this.checked = !this.checked;
    this.taskChecked.emit()
  }
}
