import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  incrementable = 0;
  interval;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.incrementable++);
    }, 1000);
  }

  pauseGame() {
    clearInterval(this.interval);
  }

}
