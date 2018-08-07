import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../../../shared/services/localStorage.service';
@Component({
  selector: 'app-telegram-popup',
  templateUrl: './telegram-popup.component.html',
  styleUrls: ['./telegram-popup.component.sass']
})
export class TelegramPopupComponent implements OnInit {

  public showPopup: boolean = false;
  public constructor(
    private _localStorageService: LocalStorageService,
  ) { }

  public ngOnInit() {
    this.showPopup = this._localStorageService.getItem('telegramPopup') ? false : true;
  }

  public vanish() {
    this.showPopup = false;
    this._localStorageService.setItem('telegramPopup', 1);
  }
}
