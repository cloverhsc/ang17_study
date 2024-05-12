import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile.component';
import CounterComponent from './Counter/counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { HoverComponent } from './hover/hover.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, CounterComponent, GetterInputComponent, PanelComponent, CardComponent, HoverComponent, LifeCycleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter = 20;
  title = 'Clover Hollo World';
  dataFromChild = '';
  toggle = true;

  receiver(wording: string) {
    this.dataFromChild = wording;
  }

  toggleHook() {
    this.toggle = !this.toggle;
  }
}
