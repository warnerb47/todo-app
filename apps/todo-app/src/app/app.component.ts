import { Component } from '@angular/core';
import { HeaderComponent } from './views/header/header.component';
import { TodoComponent } from './views/todo/todo.component';
import { MyPublicLibComponent } from 'my-public-lib';
// import { MyPublicLibComponent } from '@todo-app/my-public-lib';

@Component({
  standalone: true,
  imports: [HeaderComponent, TodoComponent, MyPublicLibComponent],
  selector: 'todo-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-app';
}
