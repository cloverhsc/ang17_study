import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
  standalone: true,
  host: {
    '(keydown)': 'newColor()',
    '[style.color]': 'color',
    '[style.borderColor]': 'borderColor'
  }
})
export class RainbowDirective {

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  color!: string;
  borderColor!: string;
  newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.possibleColors[colorPick];
    this.borderColor = this.possibleColors[colorPick];
  }
}
