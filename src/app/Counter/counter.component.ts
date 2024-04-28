import { Component, Input, booleanAttribute } from '@angular/core';
import { multiple10, trimMsg } from './counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export default class CounterComponent {
  @Input({ required: true, transform: multiple10 }) count = 0;
  @Input({ transform: trimMsg }) message = '';
  @Input({ transform: booleanAttribute }) showcountmsg = false;
}


