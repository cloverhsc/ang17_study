import { Component, DestroyRef, Input, SimpleChanges } from '@angular/core';

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

  constructor(private destroyRef: DestroyRef) {
    console.log('constructor called');
    this.name = this.title;
    console.log('name: ', this.name);
    console.log('title: ', this.title);

    destroyRef.onDestroy(() => console.log('destroyRef fired'))
  }

  ngOnInit() {
    console.log('ngOnInit fired');
    console.log('title: ', this.title);
    this.name = this.title + ' - ngOnInit';
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges fired');
    console.log('changes: ', changes);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy fired');
  }
}
