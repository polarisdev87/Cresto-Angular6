import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramPopupComponent } from './telegram-popup.component';

describe('TelegramPopupComponent', () => {
  let component: TelegramPopupComponent;
  let fixture: ComponentFixture<TelegramPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegramPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegramPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
