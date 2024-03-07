import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {}
