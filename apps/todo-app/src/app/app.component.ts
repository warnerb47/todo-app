import { Component } from '@angular/core';
import { HeaderComponent } from './views/header/header.component';
import { TodoComponent } from './views/todo/todo.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, TodoComponent],
  selector: 'todo-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-app';
}
