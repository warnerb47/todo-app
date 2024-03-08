import { Component } from '@angular/core';
import { HeaderComponent } from './views/header/header.component';

@Component({
  standalone: true,
  imports: [HeaderComponent],
  selector: 'todo-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-app';
}
