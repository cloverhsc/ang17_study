import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile.component';
import CounterComponent from './Counter/counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, CounterComponent, GetterInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter = 20;
  title = 'Clover Hollo World';
}
