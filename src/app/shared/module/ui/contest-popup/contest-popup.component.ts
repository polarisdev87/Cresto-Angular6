import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/localStorage.service';

@Component({
  selector: 'app-contest-popup',
  templateUrl: './contest-popup.component.html',
  styleUrls: ['./contest-popup.component.sass']
})
export class ContestPopupComponent implements OnInit {

  public showPopup: boolean = false;
  public constructor(
    private _localStorageService: LocalStorageService
  ) { }

  public ngOnInit() {
    this.showPopup = this._localStorageService.getItem('contestPopup') ? false : true;
  }

  public vanish() {
    this.showPopup = false;
    this._localStorageService.setItem('contestPopup', 1);
  }

}
