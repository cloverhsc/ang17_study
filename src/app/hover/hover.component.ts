import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { RainbowDirective } from '../rainbow.directive';

@Component({
  selector: 'app-hover',
  standalone: true,
  imports: [RainbowDirective],
  templateUrl: './hover.component.html',
  styleUrl: './hover.component.scss'
})
export class HoverComponent {
  @HostListener('click') onClick() {
    console.log('%c Clicked on HoverComponent', 'color: green')
  }
}
