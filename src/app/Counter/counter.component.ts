import { Component, Input } from '@angular/core';
import { multiple10, trimMsg } from './counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export default class CounterComponent {
  @Input({ required: true, transform: multiple10 }) count = 0;
  @Input({ transform: trimMsg }) message = '';
}


