import { Component, Input, booleanAttribute } from '@angular/core';
import { multiple10, trimMsg } from './counter.service';
import { CommonModule } from '@angular/common';
import { GetterInputComponent } from '../getter-input/getter-input.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  inputs: ['count', 'message', 'showcountmsg', 'title'],
})
export default class CounterComponent extends GetterInputComponent {
  @Input({ required: true, transform: multiple10, alias: 'dummynamecounter' }) count = 0;
  @Input({ transform: trimMsg }) message = '';
  @Input({ transform: booleanAttribute }) showcountmsg = false;

  override ngOnInit(): void {
    console.log('Counter this.count', this.count);
    console.log('Counter this.message', this.message);
    console.log('Counter this.showcountmsg', this.showcountmsg);
    console.log('Counter this.title', this.title);
  }
}


