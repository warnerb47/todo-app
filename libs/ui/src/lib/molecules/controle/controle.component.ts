import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atomes';

@Component({
  selector: 'todo-app-controle',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './controle.component.html',
  styleUrl: './controle.component.scss',
})
export class ControleComponent {}
