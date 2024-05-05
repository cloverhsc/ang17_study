import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { RainbowDirective } from '../rainbow.directive';

@Component({
  selector: 'app-hover',
  standalone: true,
  imports: [RainbowDirective],
  templateUrl: './hover.component.html',
  styleUrl: './hover.component.scss',
  host: {
    '[class.hovered]': 'isHovered',
    '(click)': 'onClick()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HoverComponent {
  isHovered = false;
  onClick() {
    console.log('%c Clicked on HoverComponent', 'color: green')
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
