import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() onAddNumber = new EventEmitter<number>();

  count = 0;
  timer = null;

  onFireEvent() {
    this.timer = setInterval(() => {
      ++this.count;
      this.onAddNumber.emit(this.count);
    }, 1000);
  }

  onStopEvent() {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }
}
