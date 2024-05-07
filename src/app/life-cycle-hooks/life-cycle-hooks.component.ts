import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent {
  @Input() title = '';
  name = '';

  constructor() {
    console.log('constructor called');
    this.name = this.title;
    console.log('name: ', this.name);
    console.log('title: ', this.title);
  }

  ngOnInit() {
    console.log('ngOnInit fired');
    console.log('title: ', this.title);
    this.name = this.title + ' - ngOnInit';
  }
}
