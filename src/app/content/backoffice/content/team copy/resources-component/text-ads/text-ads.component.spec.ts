import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAdsComponent } from './text-ads.component';

describe('TextAdsComponent', () => {
  let component: TextAdsComponent;
  let fixture: ComponentFixture<TextAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
