import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-app-my-public-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-public-lib.component.html',
  styleUrl: './my-public-lib.component.css',
})
export class MyPublicLibComponent {}
