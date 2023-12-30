import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class EvenComponent {
  @Input() evenNumber: number;
}
