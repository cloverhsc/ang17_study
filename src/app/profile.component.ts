import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[app-profile], app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProfileComponent {
  title = 'Profile';
}
