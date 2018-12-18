import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent implements OnInit {
  public timer: number = 0;
  public days: string = '00';
  public hours: string = '00';
  public minutes: string = '00';
  public seconds: string = '00';

  public ngOnInit() {
    this.timer = window.setInterval(() => { this.countDown(); }, 1000);
  }
  private countDown() {
    const countDownDate = 1549008000000;
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.days = String(days);
    if (days < 10) {
      this.days = '0' + days;
    }
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.hours = String(hours);
    if (hours < 10) {
      this.hours = '0' + hours;
    }
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.minutes = String(minutes);
    if (minutes < 10) {
      this.minutes = '0' + minutes;
    }
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.seconds = String(seconds);
    if (seconds < 10) {
      this.seconds = '0' + seconds;
    }

    // If the count down is over, write some text
    if (distance < 0) {
      this.days = this.hours = this.minutes = this.seconds = '00';
      clearInterval(this.timer);
    }
  }
}
