import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {  
  @Input() oddNumber: number;
}
