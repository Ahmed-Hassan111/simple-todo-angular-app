import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'appStopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss',
})
export class StopwatchComponent {
  elapsedTime = 0;
  isRunning = false;
  intervalRef: any;

  startStop() {
    this.isRunning ? this.stop() : this.start();
  }

  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1;
    }, 100);
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
  }
}
